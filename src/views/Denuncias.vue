<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-xs-h2 text-md-h2">Denúncias</h1>
    <v-row class="my-2 mr-2">
      <v-spacer></v-spacer>
     <v-btn prepend-icon="mdi-plus" color="success" to="/denuncias/escrever">Novo</v-btn>
    </v-row>
    <v-list lines="three">
      <v-list-subheader>Denúnicas e Reclamações</v-list-subheader>

      <v-list-item
        v-for="item, i in listDenuncia" :key="i"
        class="border mb-1"
      >
        <v-list-item-title class="font-weight-black">{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle>Abertura em {{ formatteDate(item.dateCreated) }}</v-list-item-subtitle>

        <v-list-item-subtitle class="mt-5">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, mollitia.
         Incidunt corporis ut facilis beatae dolore sit at veritatis sequi mollitia, ipsa inventore velit vel aspernatur? Aperiam, laborum? Illo,
         maiores!
        </v-list-item-subtitle>

        <template v-slot:append>
          <v-btn disabled color="warning" v-if="item.answer">Aguardando</v-btn>
          <v-btn v-else variant="text" color="primary" @click="respondeView(item)">Ver Resposta</v-btn>
        </template>

      </v-list-item>
    </v-list>

    <v-pagination :length="1"></v-pagination>

    <v-dialog v-model="dialog" width="880">
      <dialog-resposta @close="dialog = false" :response="response"/>
    </v-dialog>
  </div>
</template>

<script>
  import { useDenunciaStore } from '@/store/DenunciaStore'
  const denunciaStore = useDenunciaStore()
  import dialogResposta from '@/components/denuncias/dialogresposta.vue'
  import moment from 'moment'

  export default {
    data(){
      return{
        reads: [],
        dialog: false,
        response: {}
      }
    },
    components:{
      dialogResposta
    },
    computed:{
      listDenuncia(){
        return denunciaStore.readDenuncias
      }
    },
    methods: {
      readListCheck(item){
        this.reads.push(item)
      },
      formatteDate(date){
        moment.locale('pt-br')
        const dateM = moment(Date.now()).format('DD/MM/YYYY')
        return dateM
      },
      respondeView(item){
        this.dialog = true
        this.response = item
      }
    }
  }
</script>

<style scoped>

</style>
