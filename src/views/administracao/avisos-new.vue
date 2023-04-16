<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/admin/avisos"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Novos Avisos</h1>
    <p class="text-subtitle-1 ml-1">Escreva novos avisos para os moradores.</p>

    <div style="max-width: 880px;" class="mx-auto mt-15">

      texto para edição

      mostrar uma pagina


    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        page: 1
      }
    }

  }
</script>

<style scoped>

</style>
