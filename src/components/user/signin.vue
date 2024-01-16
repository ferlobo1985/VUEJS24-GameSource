<template>
    <div class="signin_container">

        <!-- loader -->

        <Form @submit="onSubmit" :validation-schema="formSchema">
            <h1 v-text="!type ? 'Sign in':'Register'"></h1>

            <div class="form-group">
                <Field 
                    name="email" 
                    :value="'francis@gmail.com'" 
                    v-slot="{field, errors, errorMessage}"
                >
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your email"
                        v-bind="field"
                        :class="{'is-invalid':errors.length !== 0}"
                    />
                    <div
                        class="input_alert"
                        v-if="errors.length !== 0"
                    >
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>

            <div class="form-group">
                <Field 
                    name="password" 
                    :value="'testing123'" 
                    v-slot="{field, errors, errorMessage}"
                >
                    <input
                        type="password"
                        class="form-control"
                        placeholder="Enter your password"
                        v-bind="field"
                        :class="{'is-invalid':errors.length !== 0}"
                    />
                    <div
                        class="input_alert"
                        v-if="errors.length !== 0"
                    >
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>

            <button
                type="submit"
                class="btn mb-3 btn-block"
                v-text="!type ? 'sign in':'Register'"
            >
            </button>

            <hr/>
            <div class="form_swap" @click="type = !type">
                <span v-if="type">
                    I want to <b>Sign in</b>
                </span>
                <span v-else>
                    I want to <b>Register</b>
                </span>
            </div>
        </Form>
    </div>
</template>

<script setup>
    import { Field, Form } from 'vee-validate';
    import * as yup from 'yup';
    import { ref } from 'vue';

    const type = ref(false);
    const formSchema = yup.object({
        email:yup.string()
        .required('The email is required')
        .email('Not a valid email'),
        password:yup.string()
        .required('The email is required')
    });

    function onSubmit(values,{ resetForm }) {
        console.log(values)
    }
</script>