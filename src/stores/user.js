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
        async register(formData){
            
        }
    }
})