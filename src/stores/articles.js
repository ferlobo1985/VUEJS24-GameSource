import { defineStore } from "pinia";
import router from '@/router';
import { useUserStore } from '@/stores/user';

/// FIREBASE
import { DB } from '@/utils/firebase';
import {  collection, getDoc, doc, setDoc, serverTimestamp, updateDoc, query, orderBy, 
getDocs, limit, startAfter, deleteDoc } from 'firebase/firestore';

// TOASTS
import { useToast } from "vue-toast-notification";
const $toast = useToast();

let articlesCol = collection(DB,'articles');

export const useArticleStore = defineStore('article',{
    state:()=>({
        homeArticles:'',
        adminArticles:'',
        adminLastVisible:''
    }),
    getters:{},
    actions:{
        async updateArticle(id, formData){
            try{
                const docRef = doc(DB,'articles',id);
                await updateDoc(docRef,{
                    ...formData
                });
                /// SHOW TOASTS
                $toast.success('Updated !!')
                return true;
            } catch(error){
                $toast.success(error.message)
                throw new Error(error)
            }
        },
        async getArticleById(id){
            try{
                const docRef = await getDoc(doc(DB,'articles',id));
                if(!docRef.exists()){
                    throw new Error('Could not find document')
                }
                return docRef.data()
            } catch(error){
                router.push({name:'404'})
            }
        },  
        async addArticle(formData){
            try{
                // GET USER PROFILE
                const userStore = useUserStore();
                const user = userStore.getUserData;
                // POST DOC IN DB
                const newArticle = doc(articlesCol);
                await setDoc(newArticle,{
                    timestamp: serverTimestamp(),
                    owner:{
                        uid:user.uid,
                        firstname: user.firstname,
                        lastnme: user.lastname
                    },
                    ...formData
                });
                // REDIRECT USER
                router.push({name:'admin_articles', query:{reload:true}})
                return true;
            }catch(error){
                throw new Error(error)
            }
        }
    }
})