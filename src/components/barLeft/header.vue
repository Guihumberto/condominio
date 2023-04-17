<template>
  <div>
    <div
      class="text-center pa-5"
      v-if="login"
    >
      <v-avatar size="120" color="grey">
        <v-icon size="100">mdi-account</v-icon>
      </v-avatar>
      <div class="mt-5">
        <h5 class="text-h5">Nome do Usuario</h5>
        <h5 class="text-h6">{{ typeSelect }}</h5>
      </div>
      <v-divider class="my-5"></v-divider>
    </div>
    <v-card
      class="pa-10"
      v-else
    >
      <v-card-text class="border mb-2">
        <p class="text-caption">
          Entre para ter acesso a todas as funcionalidades do app!
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="success"
          block
        >Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  import { useMainStore } from '@/store/MainStore'
  const mainStore = useMainStore()

  export default {
    data(){
      return{
        login: true
      }
    },
    computed:{
      typeSelect(){
        let type = mainStore.readAreaSelect
        if(type == 1){
          return "Administração"
        } else if(type == 2) {
          return "Portaria"
        } else if (type == 3) {
          return "Casa 05"
        } else {
          return "Faça Login"
        }
      }
    }
  }
</script>

<style scoped>


</style>
