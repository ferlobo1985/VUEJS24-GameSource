<template>
    <h1>Add article</h1>
    <hr/>

    <div class="text-center m-3" v-show="loading">
        <v-progress-circular
            indeterminate
            color="primary"
        />
    </div>


    <Form class="mb-5" @submit="onSubmit" :validation-schema="ArticleSchema"  v-show="!loading">


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
        <div class="mb-4">
            <WYSIWYG @update="updateEditor"/>
            <Field name="editor" v-model="veditor" v-slot="{field, errors, errorMessage}">
                <input
                    type="hidden"
                    id="veditor"
                    v-bind="field"
                />
                <div class="input_alert" v-if="errors.length !== 0">
                    {{ errorMessage }}
                </div>
            </Field>
        </div>

        <!-- 5-Rating -->
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
    import ArticleSchema from './schema'
    /// WYSIWYG
    import WYSIWYG from '@/utils/wysiwyg.vue'
    // ARTICLE STORE
    import { useArticleStore } from '@/stores/articles';
    const articleStore = useArticleStore();
    // TOASTS
    import {useToast} from 'vue-toast-notification'
    const $toast = useToast();

    const loading = ref(false);
    const ratingArray = [0,1,2,3,4,5];
    const veditor = ref('');


    function onSubmit(values,{ resetForm}) {
        loading.value = true;
        articleStore.addArticle(values)
        .then(()=>{
            $toast.success('New Article created')
        })
        .catch((error)=>{
            $toast.error(error.message)
        })
        .finally(()=>{
            loading.value = false;
        })
    }

    function updateEditor(value){
        veditor.value = value
    }


</script>