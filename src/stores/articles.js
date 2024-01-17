import { defineStore } from "pinia";
import router from '@/router';
import { useUserStore } from '@/stores/user';

/// FIREBASE
import { DB } from '@/utils/firebase';
import {  collection, getDoc, doc, setDoc, serverTimestamp, updateDoc, query, orderBy, 
getDocs, limit, startAfter, deleteDoc } from 'firebase/firestore';


let articlesCol = collection(DB,'acticles');

export const useArticleStore = defineStore('article',{
    state:()=>({
        homeArticles:'',
        adminArticles:'',
        adminLastVisible:''
    }),
    getters:{},
    actions:{
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