<template>

    <h1>User Profile</h1>
    <hr/>

    <Form class="mb-5 col-md-5" @submit="onSubmit" :validation-schema="formSchema">

        <div class="mb-4">
                <Field 
                    name="firstname" 
                    v-model="firstname"
                    v-slot="{field, errors, errorMessage}"
                >
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your firstname"
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

            <div class="mb-4">
                <Field 
                    name="lastname" 
                    v-model="lastname"
                    v-slot="{field, errors, errorMessage}"
                >
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your lastname"
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

            <v-btn
                type="submit"
                variant="outlined"
                :disabled="loading"
                :loading="loading"
            >
                Update profile
            </v-btn>

    </Form>

</template>

<script setup>
    import { Field, Form } from 'vee-validate';
    import { updateProfile } from '@/composables/user';
    const { loading, formSchema, onSubmit,firstname, lastname } = updateProfile();
</script>