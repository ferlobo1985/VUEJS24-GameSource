<template>
    <div class="text-center m-3" v-show="loading">
        <v-progress-circular
            indeterminate
            color="primary"
        />
    </div>
    <div v-show="!loading">
        <v-table theme="dark">
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Owner
                    </th>
                    <th class="text-left">
                        Rating
                    </th>
                    <th class="text-left">
                        Date
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(article) in articleStore.adminArticles">
                    <td>{{ article.game }}</td>
                    <td>{{ article.owner.firstname }} {{ article.owner.lastname }}</td>
                    <td>{{ article.rating }}</td>
                    <td>{{ article.timestamp.toDate().toDateString() }}</td>
                    <td>
                        <v-btn
                            variant="outlined"
                            color="red"
                            size="small"
                            @click="removeHandler(article.id)"
                        >
                            Remove
                        </v-btn>
                    </td>
                    <td>
                        <v-btn
                            variant="outlined"
                            color="yellow"
                            size="small"
                            @click="router.push({name:'admin_edit',params:{id:article.id}})"
                        >
                            Edit
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>

        <div class="text-center m-3" v-if="btnLoad">
            <v-progress-circular indeterminate color="primary"/>
        </div>
        <v-btn
            v-else
            variant="outlined"
            class="mt-3"
            @click="loadMoreHandler()"
        >
            Get more articles
        </v-btn>

    </div>
</template>

<script setup>
    import { ref } from 'vue';
    // ARTICLE STORE
    import { useArticleStore } from '@/stores/articles';
    const articleStore = useArticleStore();
    // ROUTER
    import { useRoute, useRouter} from 'vue-router';
    const router = useRouter();
    const route = useRoute();

    const loading = ref(false);
    const btnLoad = ref(false);


    /// REMOVE BY ID
    const removeHandler = (articleID) => {
        loading.value = true;
        articleStore.removeById(articleID)
        .finally(()=>{ loading.value = false})
    }


    /// LOAD MORE ARTICLES
    const loadMoreHandler = () => {
        btnLoad.value = true;
        articleStore.adminGetMoreArticles(3)
        .finally(()=>{
            btnLoad.value = false
        })
    }

    //// GET FIRST ARTICLES
    if(!articleStore.adminArticles || route.query.reload){
        loading.value = true;
        articleStore.adminGetArticles(3)
        .finally(()=>{
            loading.value = false;
        })
    }

</script>