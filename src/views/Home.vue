<template>
  <div class="home">
    <header
      class="flex justify-around bg-primary laptop:pr-24 laptop:pl-24 text-white h-16 items-center"
    >
      <h1>PULP</h1>
      <div class="flex justify-between w-60 laptop:w-80">
        <p>Panier</p>
        <p>Lieu</p>
        <p>Utilisateur</p>
      </div>
    </header>
    <div class="pr-8 pl-8">
      <h1 class="text-mobileBody font-semibold">Restaurants dans le coin</h1>
      <button class="mt-12">Voir les restaurants</button>
      <CardResto />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardResto from '@/components/CardResto.vue';

export default {
  name: 'Home',
  components: {
    CardResto,
  },
};
</script>
