<template>
  <div>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Reservas</h1>
    <p class="text-subtitle-1 ml-1">Reservas para eventos na área de lazer</p>

    <div class="d-flex justify-space-between my-5">
      <info />
      <dialog-new />
    </div>

    <div>
      <v-list style="max-width:800px" class="mx-auto">
        <v-list-subheader>Datas Bloqueadas</v-list-subheader>
        <v-list-item v-for="item, i in reservaList" :key="i" class="mb-2 border rounded-lg">
          <v-list-item-title class="font-weight-bold">
           {{ item.data }}
          </v-list-item-title>
          <template v-slot:append>
            <v-chip :color="isPay(item).color">
              {{ isPay(item).text }}
            </v-chip>
          </template>
        </v-list-item>

      </v-list>
    </div>

  </div>
</template>

<script>
  import { useReservaStore } from '@/store/ReservaStore'
  const reservaStore = useReservaStore()
  import dialogNew from '@/components/reservas/dialogNew.vue'
  import info from '@/components/reservas/reservas.vue'

  export default {
    components:{
      dialogNew,
      info
    },
    data(){
      return{

      }
    },
    computed:{
      reservaList(){
        return reservaStore.readReservas
      }
    },
    methods: {
      isPay(item){
        return item.pay
        ? {color: 'green', text: "Reservado"}
        : {color: 'warning', text: "aguardando pgto"}
      }
    },

  }
</script>

<style scoped>

</style>
