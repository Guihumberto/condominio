<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/admin/administracao"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Solicitações</h1>
    <p class="ml-1 text-subtitle-1">Análise de solicitações de reservas da área de lazar, mudança e denúncias.</p>

    <div style="max-width: 880px;" class="mx-auto mt-15">

      <v-select
        label="Filtrar"
        variant="outlined"
        :items="type"
        v-model="typeSelect"
      ></v-select>

      <v-list nav>
        <v-list-subheader>Análises pendentes</v-list-subheader>
        <v-list-item
          class="border mb-5" :prepend-icon="item.icon" :color="item.color" v-for="item, i in reservaListPendente" :key="i"
          @click="analisePedido(item)"
        >
          <v-list-item-title>{{ item.typeName }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.subtitle}} - {{ item.casa }}</v-list-item-subtitle>
          <template v-slot:append>
            <div class="d-flex align-center">
              <v-icon class="mr-2" color="grey">mdi-calendar</v-icon>
              <div class="text-center">
                <h6 class="text-caption">Data:</h6>
                <h6 class="text-subtitle-3">12/12/2022</h6>
              </div>
            </div>
          </template>
        </v-list-item>
        <v-alert v-if="!reservaListPendente.length" icon="mdi-information">
              Nâo há análise pendente <span v-if="typeSelect != 'Todos'">para o filtro selecionado.</span>
        </v-alert>
      </v-list>
      <div class="text-right">
        <v-btn variant="text" color="primary">Ver análises realizadas</v-btn>
      </div>
    </div>

    <v-dialog width="550" v-model="dialogConfirm">
      <v-card>
        <v-card-title class="bg-success d-flex align-center justify-space-between">
          <span>Análise do Pedido</span>
          <v-btn icon="mdi-close" flat color="transparent" @click="dialogConfirm = false" />
        </v-card-title>
        <v-card-text>
          <div>
            {{ pedido.typeName }} <br>
            Nome: {{ pedido.casa }}<br>
            casa {{ pedido.casa }}<br>
            dia: {{ pedido.data }}<br>
          </div>


          <div v-if="pedido.type == 1" class="mt-5 d-flex justify-space-between align-center">
            <div style="height: 50px;">
              <span class="mr-5">O pagamento da taxa de reserva foi realizado?</span>
            </div>
            <div>
              <v-switch color="primary" v-model="pedido.pay"></v-switch>
            </div>
          </div>


          <div v-if="pedido.pay">
                  <div v-if="!justify">
                   <p>Autoriza a solicitação do pedido?</p>
                  <div class="text-right">
                    <v-btn variant="outlined" color="red" class="mr-2" @click="pedido.authorized = false, justify = true">Não</v-btn>
                    <v-btn color="primary" @click="autorizarSolicitacao(pedido)">Sim</v-btn>
                  </div>
                 </div>
                 <div v-if="justify">
                  <v-textarea
                   label="Justificativa"
                   placeholder="Justifique para o morador o motivo da negativa e quando será feito a devolução do valor pago."
                  ></v-textarea>
                  <div class="text-right">
                    <v-btn @click="dialogConfirm = false, justify = false" variant="outlined" color="grey" class="mr-2">Cancelar</v-btn>
                    <v-btn color="success" @click="negarSolicitacao(pedido)">Enviar</v-btn>
                  </div>
                 </div>
          </div>


        </v-card-text>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
  import { useReservaStore } from '@/store/ReservaStore'

  const reservaStore = useReservaStore()

  export default {
    data(){
      return{
        type:["Todos", "Reservas", "Mudanças", "Denúncias"],
        typeSelect: "Todos",
        dialogConfirm: false,
        pay: false,
        pedido: {},
        justify: false
      }
    },
    computed:{
      reservaListPendente(){
        let reservas = reservaStore.readReservas

        let list = []

        reservas = reservas.filter(x => !x.authorized)

        if(reservas.length > 0){
          reservas.forEach(el => {
            el.type = 1
            el.typeName = "Reserva da área de lazer"
            el.subtitle = "Reserva"
            el.icon = "mdi-pool",
            el.color = 'primary'

            list.push(el)
          });
        }

        if(this.typeSelect == "Reservas"){
            list = list.filter(x => x.type == 1)
        }

        if(this.typeSelect == "Todos"){
            list = list.filter(x => !x.authorized)
        }

        if(this.typeSelect == "Mudanças"){
          list = list.filter(x => x.type == 2)
        }

        if(this.typeSelect == "Denúncias"){
          list = list.filter(x => x.type == 3)
        }


        return list
      }
    },
    methods:{
      analisePedido(item){
        this.dialogConfirm = true
        this.pedido = item
      },
      autorizarSolicitacao(pedido){
        console.log(pedido);
        this.dialogConfirm = false
      },
      negarSolicitacao(pedido){
        console.log(pedido);
        this.dialogConfirm = false
      }
    }
  }
</script>

<style scoped>

</style>
