<template>
  <div class="home">
    <Header />
    <div class="">
      <h1 class="pr-8 pl-8">Le titre du restaurant</h1>
      <CardItem class="mr-8 ml-8" />
      <BannerItemsPopulaires />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardItem from '@/components/CardItem.vue';
import Header from '../components/Header.vue';
import BannerItemsPopulaires from '../components/BannerItemsPopulaires.vue';

export default {
  name: 'Home',
  components: {
    CardItem,
    Header,
    BannerItemsPopulaires,
  },
};
</script>
