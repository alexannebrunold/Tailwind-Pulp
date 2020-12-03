<template>
  <div class="flex flex-col relative">
    <CardSC class="absolute	top-1 left-1" />
    <p class="bg-blue-100 h-28 w-full rounded-md"></p>
    <!-- <img src="../assets/img.jpg" alt="" class="bg-blue-100  rounded-md" /> -->
    <p class="font-semibold">Titre du resto</p>
    <div class="flex flex-row justify-between w-full text-mobileDescription">
      <p>Description du resto</p>
      <p>Temps de marche</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardSC from '@/components/CardSC.vue';

export default {
  name: 'Home',
  components: {
    CardSC,
  },
};
</script>
