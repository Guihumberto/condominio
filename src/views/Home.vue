<template>
  <v-row v-motion-slide-bottom style="max-width: 1080px;" class="mx-auto">
    <v-col cols="6" sm="3" v-for="item, i in optionsList" :key="i">
      <options :item="item" />
    </v-col>
  </v-row>
</template>

<script setup>
  import options from '@/components/principal/options.vue'
  import { useMainStore } from "../store/MainStore";
  const mainStore = useMainStore();

  const optionsList = mainStore.readListMenu.filter(x => x.show)

</script>
