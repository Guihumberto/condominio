<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Visitantes</h1>
    <p class="text-subtititle-1">Inclua seus visitantes recorrente para serem liberados na portaria sem necessidade de ligação</p>

    <div style="max-width: 880px;" class="mx-auto mt-15">
      <div class="text-right my-2">
       <dialogIncludes />
      </div>
      <v-list lines="three">
        <v-list-subheader>Visitantes recorrentes</v-list-subheader>

        <v-list-item
          v-for="item, i in visitanteList" :key="i"
          class="border mb-1"
        >
          <v-list-item-subtitle>
            <v-icon size="x-small">mdi-account</v-icon>
            {{ item.parentesco }}
          </v-list-item-subtitle>
          <v-list-item-title class="font-weight-black">{{ item.name }}</v-list-item-title>


          <v-list-item-subtitle class="mt-2" v-if="item.veiculos.length">
           <div v-for="v, index in item.veiculos" :key="index">
            <v-icon size="sm">mdi-car</v-icon> {{ v.carro  }} - {{ v.cor }} - {{ v.placa }}
           </div>
          </v-list-item-subtitle>
          <v-list-item-subtitle class="mt-2" v-else>
           <v-alert>Entrada sem veículo</v-alert>
          </v-list-item-subtitle>
          <template v-slot:append>
            <v-menu
              open-on-hover
            >
              <template v-slot:activator="{ props }">
                <v-btn  v-bind="props" flat size="small" icon="mdi-dots-vertical"></v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>


        </v-list-item>
      </v-list>
      <v-pagination :length="1"></v-pagination>
    </div>
  </div>
</template>

<script>
  import dialogIncludes from '@/components/visitantes/dialogInclude.vue'
  import { useVisitantesStore } from '@/store/VisitantesStore'
  const visitanteStore = useVisitantesStore()

  export default {
    data(){
      return{
        items: [
          { title: 'Editar' },
          { title: 'Apagar' },
        ],
      }
    },
    components:{
      dialogIncludes
    },
    computed:{
      visitanteList(){
        return visitanteStore.readVisitantes.sort((a,b) => b.id - a.id )
      }
    },
    methods: {
      readListCheck(item){
        this.reads.push(item)
      },
      order(a, b){
        return a > b
      }
    },
  }
</script>

<style scoped>

</style>
