import { defineStore } from "pinia";
import router from '@/router';

/// FIREBASE
import { AUTH, DB } from '@/utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDoc, doc, setDoc, updateDoc } from 'firebase/firestore';

const DEFAULT_USER = {
    uid:null,
    email:null,
    firstname:null,
    lastname:null,
    isAdmin:null
}

export const useUserStore = defineStore('user',{
    state:()=>({
        loading:false,
        user:DEFAULT_USER,
        auth:false
    }),
    getters:{},
    actions:{
        setUser(user){
            this.user = { ...this.user,...user };
            this.auth = true;
        },
        async register(formData){
            try{
                this.loading = true;

                /// REGISTER USER
                const response = await createUserWithEmailAndPassword(
                    AUTH,
                    formData.email,
                    formData.password
                );

                // ADD USER TO DB
                const newUser = {
                    uid: response.user.uid,
                    email:response.user.email,
                    isAdmin: false
                }
                await setDoc(doc(DB,'users',response.user.uid),newUser);

                /// UPDATE LOCAL STATE
                this.setUser(newUser);

                // REDIRECT USER
                router.push({name:'dashboard'})
            }catch(error){
                throw new Error(error.code)
            } finally {
                this.loading = false;
            }
        }
    }
})