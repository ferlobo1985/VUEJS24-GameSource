<template>


    


</template>

<script setup>
    import { Field, Form } from 'vee-validate';
    import { updateProfile } from '@/composables/user';

    const { loading, formSchema, onSubmit,firstname, lastname } = updateProfile()

</script>