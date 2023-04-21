<template>
  <v-app :theme="dark ? 'dark' : 'light'" >
    <v-navigation-drawer
      v-model="drawer"
      >
      <template v-slot:prepend>
        <visao />
      </template>

      <headerbar />
      <menuList />
      <template v-slot:append>
        <menuArea />
      </template>
    </v-navigation-drawer>
    <v-app-bar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <v-icon size="small" icon="mdi-office-building" />
        Condomínio
      </v-app-bar-title>
      <v-btn icon="mdi-brightness-4" @click="dark = !dark" />
    </v-app-bar>
    <v-container v-motion-slide-bottom>
      <default-view />
    </v-container>
  </v-app>
</template>

<script setup>
  import {ref} from 'vue'
  import DefaultView from './View.vue'
  import headerbar from '@/components/barLeft/header.vue'
  import menuList from '@/components/barLeft/menuList.vue'
  import menuArea from '@/components/barLeft/menuArea.vue'
  import visao from '@/components/barLeft/visao.vue'

  let drawer = ref(false)
  let dark = ref(false)

</script>
