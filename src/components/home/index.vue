<template>
    <div class="container">
        <AppCarousel/>
    </div>
</template>

<script setup>
    import AppCarousel from '@/utils/carousel.vue';

    /// ARTICLE STORE
    import { useArticleStore } from '@/stores/articles';
    const articleStore = useArticleStore();

    if(!articleStore.homeArticles){
        articleStore.getArticles(8);
    }
</script>