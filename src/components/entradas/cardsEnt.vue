<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="344"
      variant="outlined"
      :color="item.active ? 'green' : 'grey'"
    >
      <v-card-item>
        <div>
          <div class="text-overline mb-1">
            {{ selectType(item.type) }}
          </div>
          <div class="text-h6 mb-1">
            {{ item.name}}
          </div>
          <div class="text-caption" style="min-height: 50px">{{ item.obs }}</div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="outlined" @click="activeItem(item)">
          {{ item.active ? 'Desativar' : 'Ativar' }}
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog
        v-model="dialog"
        width="800"
      >
      <avisoLib @closeDialog="dialog = false"  />
    </v-dialog>
  </div>
</template>
<script>
import { useEntradaStore } from '@/store/EntradaStore'
import avisoLib from '@/components/entradas/avisoLibe.vue'
  const entradaStore = useEntradaStore()

 export default {
  data(){
    return{
      dialog: false
    }
  },
  components:{
    avisoLib
  },
  props:{
    item: Object
  },
  computed:{
    items(){
      return entradaStore.readListTypes
    },
  },
  methods: {
    selectType(item){
      let nameType = this.items.filter(x => x.id == item)
      return nameType[0].name
    },
    activeItem(item){
      item.active = !item.active
      item.dataCreate = Date.now()
      entradaStore.updateActive(item)
      if(item.active){
        this.dialog = true
      } else {
        this.dialog = false
      }
    }
  },
 }
</script>
