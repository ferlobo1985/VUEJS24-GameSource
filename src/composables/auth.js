import { ref } from 'vue'
/// AUTH STORE
import { useUserStore } from '@/stores/user'; 
/// FIREBASE
import { AUTH } from '@/utils/firebase';
import { onAuthStateChanged } from 'firebase/auth'

export const firstLoad = () => {
    const userStore = useUserStore();
    const loading = ref(true);

    onAuthStateChanged(AUTH,async(user)=>{
        if(user){
            await userStore.autosignin(user.uid)
        }
        loading.value = false;
    })
    return {loading}
}


export const isAuth = () => {
    let user = AUTH.currentUser;
    if(!user) return '/signin';
    return true;
}

export const isLoggedIn = () => {
    let user = AUTH.currentUser;
    if(user) return '/';
    return true;
}