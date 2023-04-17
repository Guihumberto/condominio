<template>
  <v-row v-motion-slide-bottom style="max-width: 1080px;" class="mx-auto">
    <v-col cols="12">
      <v-alert icon="mdi-information" color="orange-lighten-2" class="text-orange-darken-4" closable>
        <p>Você possui solicitações para serem tratatas! <v-icon>mdi-adjust</v-icon></p>
      </v-alert>
    </v-col>
    <v-col cols="6" sm="3" v-for="item, i in optionsList" :key="i">
      <options :item="item" />
    </v-col>
  </v-row>
</template>

<script setup>
  import options from '@/components/principal/options.vue'
  import { useAdminStore } from "@/store/administracao/AdminStore";
  const adminStore = useAdminStore();

  const optionsList = adminStore.readListMenu.filter(x => x.show)

</script>
