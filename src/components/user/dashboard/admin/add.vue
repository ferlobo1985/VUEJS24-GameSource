<template>
    <h1>Add article</h1>
    <hr/>


    <Form class="mb-5" @submit="onSubmit">


        <!-- 1-Name of the game -->
        <div class="mb-4">
            <Field name="game" v-slot="{field, errors, errorMessage}">
                <input
                        type="text"
                        placeholder="Name of the game"
                        v-bind="field"
                        class="form-control"
                        :class="{'is-invalid':errors.length !== 0}"
                />
                <div class="input_alert" v-if="errors.length !== 0">
                    {{ errorMessage }}
                </div>
            </Field>
        </div>

         <!-- 2-Title of the article -->
         <div class="mb-4">
            <Field name="title" v-slot="{field, errors, errorMessage}">
                <input
                        type="text"
                        placeholder="Title of the article"
                        v-bind="field"
                        class="form-control"
                        :class="{'is-invalid':errors.length !== 0}"
                />
                <div class="input_alert" v-if="errors.length !== 0">
                    {{ errorMessage }}
                </div>
            </Field>
        </div>

        <!-- 3-Excerpt -->
        <div class="mb-4">
            <Field name="excerpt" v-slot="{field, errors, errorMessage}">
                <textarea
                    rows="3"
                    placeholder="Add an excerpt"
                    v-bind="field"
                    class="form-control"
                    :class="{'is-invalid':errors.length !== 0}"
                ></textarea>
                <div class="input_alert" v-if="errors.length !== 0">
                    {{ errorMessage }}
                </div>
            </Field>
        </div>

        <!-- 4-WYSIWYG  -->

        <!-- 5-Raiting -->
        <div class="mb-4">
            <Field name="rating" value="Select a rating" v-slot="{field, errors, errorMessage}">
                <select
                    class="form-select"
                    v-bind="field"
                    :class="{'is-invalid':errors.length !== 0}"
                >
                    <option value="Select a rating">Select a rating</option>
                    <option v-for="rating in ratingArray" :key="rating" :value="rating">
                        {{ rating }}
                    </option>
                </select>

                <div class="input_alert" v-if="errors.length !== 0">
                    {{ errorMessage }}
                </div>
            </Field>
        </div>


        <!-- 6-IMG -->
        <div class="mb-4">
            <Field name="img" v-slot="{field, errors, errorMessage}">
                <input
                    type="text"
                    placeholder="Add the source of the img"
                    v-bind="field"
                    class="form-control"
                    :class="{'is-invalid':errors.length !== 0}"
                />
                <div class="input_alert" v-if="errors.length !== 0">
                    {{ errorMessage }}
                </div>
            </Field>
        </div>

        <v-btn
            type="submit"
            variant="outlined"
        >
            Add article
        </v-btn>

    </Form>


</template>

<script setup>
    import { ref } from 'vue';
    import { Field, Form } from 'vee-validate';


    const ratingArray = [0,1,2,3,4,5]


    function onSubmit(values,{ resetForm}) {
        console.log(values);
    }


</script>