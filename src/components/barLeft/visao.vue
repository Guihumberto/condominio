<template>
   <div>
      <v-alert :icon="typeSelect.icon"  :color="typeSelect.color">
       {{ typeSelect.title }}
      </v-alert>
    </div>
</template>

<script>
  import { useMainStore } from '@/store/MainStore'
  const mainStore = useMainStore()
  export default {
    computed:{
      typeSelect(){
        let type = mainStore.readAreaSelect
        if(type == 1){
          return { title: "Administração", color:"primary", icon:"mdi-account-tie-woman"}
        } else if(type == 2) {
          return { title: "Portaria", color:"error", icon:"mdi-account-tie-hat"}
        } else if (type == 3) {
          return { title: "Morador", color:"success", icon:"mdi-human-male-female-child"}
        } else {
          return { title: "Faça Login", color:"info", icon: "mdi-login-variant"}
        }
      }
    }
  }
</script>

<style scoped>

</style>
