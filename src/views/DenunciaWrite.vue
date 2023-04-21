<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/denuncias"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-xs-h5 text-md-h2">Denúncias</h1>
    <h1 class="text-subtitle-1 ml-1">Denúncie em um breve texto, informando a situação e o possível causador</h1>

    <div style="max-width: 880px;" class="mx-auto mt-15 text-center">
      <v-text-field
        label="Título"
        variant="outlined"
        placeholder="Escreva um título para seu comunicado"
        v-model="title"
        required
      ></v-text-field>

      <vueQuillEditor />

      <div class=" mt-5 text-right">
        <v-btn variant="flat" color="success">Salvar</v-btn>
      </div>

    </div>

  </div>
</template>

<script>
import vueQuillEditor from '@/components/vueQuillEditor.vue'

  export default {
    components:{
      vueQuillEditor
    },
    data(){
      return{
        title: null
      }
    }

  }
</script>

<style scoped>

</style>
