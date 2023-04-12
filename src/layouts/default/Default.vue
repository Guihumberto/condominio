<template>
  <v-app :theme="dark ? 'dark' : 'light'">
    <v-navigation-drawer
      v-model="drawer"
      >
      <headerbar />
      <menuList />
    </v-navigation-drawer>
    <v-app-bar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <v-icon size="small" icon="mdi-office-building" />
        Condomínio
      </v-app-bar-title>
      <v-btn icon="mdi-brightness-4" @click="dark = !dark" />
    </v-app-bar>
    <v-container>
      <default-view />
    </v-container>
  </v-app>
</template>

<script setup>
  import {ref} from 'vue'
  import DefaultView from './View.vue'
  import headerbar from '@/components/barLeft/header.vue'
  import menuList from '@/components/barLeft/menuList.vue'
  let drawer = ref(false)
  let dark = ref(false)

</script>
