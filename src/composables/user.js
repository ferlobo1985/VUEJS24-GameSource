import * as yup from 'yup';
import { ref } from 'vue';

/// USER STORE
import { useUserStore } from '@/stores/user';

export const updateProfile = () => {
    const userStore = useUserStore();
    const firstname = ref(userStore.user.firstname);
    const lastname = ref(userStore.user.lastname);
    
    const loading = ref(false);
    const formSchema = yup.object({
        firstname:yup.string()
            .required('The name is required')
            .max(100,'You name is too long'),
        lastname:yup.string()
            .required('The lastname is required')
            .max(100,'You lastname is too long')
    });

    function onSubmit(values,{ resetForm }){
        loading.value = true;
        userStore.updateProfile(values)
        .finally(()=>{
            loading.value = false;
        })
    }

    return { loading, formSchema, onSubmit,firstname, lastname }
}