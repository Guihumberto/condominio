<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Reservas</h1>
    <p class="text-subtitle-1 ml-1">Reservas para eventos na área de lazer</p>

    <div style="max-width: 880px;" class="mx-auto mt-15">
      <div class="d-flex justify-space-between my-5">
        <info />
        <dialog-new />
      </div>


      <!-- Minhas reservas -->
      <div>
        <v-list>
          <v-list-subheader>Minhas reservas</v-list-subheader>
          <v-alert v-if="!myReserves.length" icon="mdi-information">
            Você não possui reservas futuras
          </v-alert>
          <v-list-item v-for="item, i in myReserves" :key="i" class="mb-2 border rounded-lg">
            <v-list-item-title class="font-weight-bold">
             {{ formatteDate(item) }}
            </v-list-item-title>
            <template v-slot:append>
              <v-chip :color="isPay(item).color" @click="dadosPgmto = true">
                {{ isPay(item).text }}
              </v-chip>
              <v-btn size="small" class="ml-2" color="red" v-if="!item.pay" @click="cancelar = true">Cancelar</v-btn>
            </template>
          </v-list-item>

        </v-list>
      </div>

      <!-- datas bloqueadas -->
      <div>
        <v-list>
          <v-list-subheader>Datas Bloqueadas</v-list-subheader>
          <v-list-item v-for="item, i in reservaList" :key="i" class="mb-2 border rounded-lg">
            <v-list-item-title class="font-weight-bold">
             {{ formatteDate(item) }}
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


    <v-dialog
      v-model="cancelar"
      width="850">
      <v-card>
        <v-card-title class="bg-green d-flex">
              <div>Análise do pedido</div>
              <v-spacer></v-spacer>
              <v-btn icon="mdi-close" color="transparent" flat @click="cancelar = false"></v-btn>
        </v-card-title>
        <v-card-text>
          <div v-if="pedido">
            <h5 class="text-h6">Tem certeza que deseja cancelar a solicitação?</h5>
            <v-row class="my-5" justify="center">
              <v-btn color="grey" class="mr-2" @click="cancelar = false">Não</v-btn>
              <v-btn color="red" class="mr-2" @click="pedido = false, analise = false, save = false">Sim</v-btn>
            </v-row>

          </div>

          <div v-else>
            <h5 class="text-h6">Sua solicitação foi cancelada!!</h5>
            <p>Seu pedidode mundança foi cancelado e não será submetido a análise da administração.</p>
            <v-row class="my-5">
              <v-spacer></v-spacer>
              <v-btn class="mr-2" @click="cancelar = false">Fechar</v-btn>
            </v-row>
          </div>

        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dadosPgmto"
      width="850">
      <v-card>
        <v-card-title class="bg-green d-flex">
              <div>Dados do do Pagamento</div>
              <v-spacer></v-spacer>
              <v-btn icon="mdi-close" color="transparent" flat @click="dadosPgmto = false"></v-btn>
        </v-card-title>
        <v-card-text>
            <h6 class="text-h6">Faça a transferência do valor abaixo para confirmar tua reserva.</h6>
            <div class="border mt-5 pa-5">
              R$ 120,00 <br>
              Pix: XXXXXXXXXX - <v-btn size="small" color="primary" prepend-icon="mdi-content-copy" variant="text">Copiar</v-btn> <br>
              Nome: XXXXX <br> <br>
              ou <br> <br>
              Banco XXXXXXXXXX <br>
              Conta XXXXXXXXXX - <v-btn size="small" color="primary" prepend-icon="mdi-content-copy" variant="text">Copiar</v-btn> <br>
              Agencia XXXXX - <v-btn size="small" color="primary" prepend-icon="mdi-content-copy" variant="text">Copiar</v-btn> <br>
              Nome: XXXXX <br> <br>

              Enviar comprovante para o whatsapp: (98) XXXXXX-XXXXX - <v-btn size="small" color="primary" prepend-icon="mdi-whatsapp" variant="text">Abrir</v-btn> <br>

            </div>
            <p class="mt-5 text-subtitle-1">A confirmação da reserva será feita pelo sistema</p>
            <div class="text-right">
                <v-btn variant="text" color="primary" @click="dadosPgmto = false">Fechar</v-btn>
              </div>
          </v-card-text>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>

  import moment from 'moment'
  import 'moment/locale/pt-br'

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
        minDate: new Date().setHours(0,0,0,0),
        cancelar: false,
        pedido: true,
        dadosPgmto: false
      }
    },
    computed:{
      myReserves(){
        return reservaStore.readReservas.filter(x => x.casa == "Casa 05" && new Date(x.data) > this.minDate)
      },
      reservaList(){
        return reservaStore.readReservas
      }
    },
    methods: {
      isPay(item){
        return item.pay
        ? {color: 'green', text: "Reservado"}
        : {color: 'warning', text: "aguardando pgto"}
      },
      formatteDate(item){
        return moment(item.data).locale('pt-br').format('dddd, DD/MM/YYYY')
      }
    },

  }
</script>

<style scoped>

</style>
