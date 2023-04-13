<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Denúncias</h1>
    <v-row class="my-2 mr-2">
      <v-spacer></v-spacer>
      <dialogInclude />
    </v-row>
    <v-list lines="three">
      <v-list-subheader>Denúnicas e Reclamações</v-list-subheader>

      <v-list-item
        v-for="item, i in 3" :key="i"
        class="border mb-1"
      >
        <v-list-item-title class="font-weight-black">Título do Denúncia</v-list-item-title>
        <v-list-item-subtitle>Abertura em 12/12/2023 08:00</v-list-item-subtitle>

        <v-list-item-subtitle class="mt-5">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, mollitia.
         Incidunt corporis ut facilis beatae dolore sit at veritatis sequi mollitia, ipsa inventore velit vel aspernatur? Aperiam, laborum? Illo,
         maiores!
        </v-list-item-subtitle>

        <template v-slot:append>
          <v-btn variant="text" color="primary" @click="dialog = true">Ver Resposta</v-btn>
        </template>

      </v-list-item>
    </v-list>

    <v-pagination :length="1"></v-pagination>

    <v-dialog v-model="dialog" width="880">
      <dialog-resposta @close="dialog = false"/>
    </v-dialog>
  </div>
</template>

<script>
  import dialogInclude from '@/components/denuncias/dialogInclude.vue'
  import dialogResposta from '@/components/denuncias/dialogresposta.vue'

  export default {
    data(){
      return{
        reads: [],
        dialog: false
      }
    },
    components:{
      dialogInclude,
      dialogResposta
    },
    methods: {
      readListCheck(item){
        this.reads.push(item)
      },
    },

  }
</script>

<style scoped>

</style>
