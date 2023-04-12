<template>
  <div>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Liberar entrada</h1>
    <p>Comunique na portaria se está aguardando recebimento de lanches ou a chegada de taxi/transporte de aplicativo</p>

    <v-row class="my-3">
      <v-col>
        <dialogEnt />
      </v-col>
    </v-row>

  <v-text-field
    label="Busca"
    placeholder="Busque por nome das empresas..."
    prepend-inner-icon="mdi-magnify"
    v-model="search"
    clearable
  ></v-text-field>

  <div v-if="!search">
    <v-row>
      <v-col cols="12">
        <h5 class="text-h6 ma-2 py-2"><v-icon size="small">mdi-timer-outline</v-icon> Aguardando</h5>
        <v-alert v-if="!listEntradas.length" color="red-accent-1" class="text-white">
          Não há avisos de entrada no momento para sua casa!
        </v-alert>
      </v-col>
      <v-col cols="12" sm="4" v-for="item, i in listEntradas" :key="i">
        <cardsEnt :item="item" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h5 class="text-h6 ma-2 py-2 mt-5"> <v-icon size="small">mdi-timer-off-outline</v-icon> Inativos</h5>
      </v-col>
      <v-col cols="12" sm="4" v-for="item, i in listEntradasDesactive" :key="i">
        <cardsEnt :item="item" />
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <v-row>
      <v-col cols="12" class="border-b pb-0 mb-5">
        <h5 class="text-h6 ma-2 py-2 mt-5"> <v-icon size="small">mdi-magnify</v-icon> Resultado da Busca</h5>
      </v-col>
      <v-col cols="12" sm="4" v-for="item, i in listAll" :key="i">
        <cardsEnt :item="item" />
      </v-col>
    </v-row>
  </div>



  </div>
</template>

<script>
  import cardsEnt from '@/components/entradas/cardsEnt.vue'
  import dialogEnt from '@/components/entradas/dialogEnt.vue'
  import { useEntradaStore } from '@/store/EntradaStore'
  const entradaStore = useEntradaStore()


  export default {
    data(){
      return{
        search: null
      }
    },
    components:{
      cardsEnt,
      dialogEnt
    },
    computed:{
      items(){
        return entradaStore.readListTypes
      },
      listEntradas(){
        let list = entradaStore.readEntradaList.filter(x => x.active)
        return list
      },
      listEntradasDesactive(){
        return entradaStore.readEntradaList.filter(x => !x.active)
      },
      listAll(){
        let list = entradaStore.readEntradaList

        if(this.search){
          let search = this.search.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
          let exp = new RegExp(search.trim().replace(/[\[\]!'.@><|//\\&*()_+=]/g, ""), "i")
          let filtro = list.filter(x => exp.test(x.name.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "") ))

          list = filtro
        }

        return list
      }

    },

  }
</script>

<style scoped>

</style>
