<template>
   <div v-motion-slide-bottom>
    <v-btn
      to="/admin/mudancas"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-xs-h2 text-md-h2">Respostas a denúncias</h1>
    <p class="ml-1 text-subtitle-1">Análise e respostas a denúncias.</p>

    <div style="max-width: 880px;" class="mx-auto mt-15">
      <div class="border pa-5">
        <h6 class="text-subtitle-2">{{ denuncia.idUser }}</h6>
        <p class="text-caption"> Data: {{ denuncia.dateCreated }}</p>
        <v-divider class="my-2"></v-divider>
        <h6 class="text-h6">{{ denuncia.title}}</h6>
        <div>
          <p>{{ denuncia.text }}</p>
        </div>
      </div>
      <div class="mt-5">
        <h5 class="text-h6 mb-2">Resposta a Denúncia</h5>
          <vueQuillEditor />

          <div class=" mt-5 text-right">
            <v-btn variant="flat" color="success">Salvar</v-btn>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useDenunciaStore } from '@/store/DenunciaStore'
const denunciaStore = useDenunciaStore()
import vueQuillEditor from '@/components/vueQuillEditor.vue'

  export default {
    components:{
      vueQuillEditor
    },
    data(){
      return{
        title: null,
        idDenuncia: this.$route.params.id
      }
    },
    computed:{
      denuncia(){
        denunciaStore.searchDenuncia(this.idDenuncia)
        let denuncia = denunciaStore.readDenunciaSearch
        return denuncia
      }
    }
  }
</script>

<style scoped>

</style>
