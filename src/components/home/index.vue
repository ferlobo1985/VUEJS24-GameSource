<template>
    <div class="container">
        <AppCarousel/>
        <Featured/>
    </div>
</template>

<script setup>
    import AppCarousel from '@/utils/carousel.vue';
    import Featured from './featured.vue';

    /// ARTICLE STORE
    import { useArticleStore } from '@/stores/articles';
    const articleStore = useArticleStore();

    if(!articleStore.homeArticles){
        articleStore.getArticles(8);
    }
</script>