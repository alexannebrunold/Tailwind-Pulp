<template>
  <div class="home">
    <Header />
    <div class="">
      <h1 class="text-mobileBody font-semibold">Restaurants dans le coin</h1>
      <button class="mt-12">Voir les restaurants</button>
      <CardResto :to="$router.push('/restaurant')" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardResto from '@/components/CardResto.vue';
import Header from '../components/Header.vue';

export default {
  name: 'Home',
  components: {
    CardResto,
    Header,
  },
};
</script>
