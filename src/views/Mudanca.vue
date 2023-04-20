<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Mudança</h1>
    <h6 class="text-subtitle-1 ml-1">Informe a data da mudança a administração.</h6>

    <div style="max-width: 880px;" class="mx-auto mt-15 text-center">
      <v-row v-if="!pedido" class="mt-5">
        <v-col cols="12">
          <v-btn block color="warning" @click="pedido = true">Consultar Solicitações</v-btn>

        </v-col>
        <v-col cols="12" sm="6">
          <v-card
           color="primary"
           title="Entrada"
           subtitle="Mudança para o condomínio"
           height="250"
           @click="dialog = true"
          >
            <v-card-item>
              <div class="text-center">
                <v-icon
                  icon="mdi-truck-delivery-outline"
                  size="100"
                ></v-icon>
                <div class="text-h6">Chegando</div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card
           color="error"
           title="Saída"
           subtitle="Saída do condomínio"
           height="250"
           @click="dialog = true"
          >
            <v-card-item>
              <div class="text-center">
                <v-icon
                  icon="mdi-truck-delivery-outline"
                  style="transform: scaleX(-1);"
                  size="100"
                ></v-icon>
                <div class="text-h6">Saindo</div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else class="mt-5">
        <v-col cols="12" class="d-flex justify-space-between align-center">
          <h5 class="text-h6">Pesquisar solicitação</h5>
          <v-btn color="transparent" icon="mdi-close" flat @click="pedido = false" />
        </v-col>

        <v-col cols="12" class="d-flex">
          <v-text-field
            label="Digite seu CPF"
            variant="outlined"
            v-model="search"
            density="compact"
            :rules="[rules.mincpf]"
          >
          <template v-slot:append-inner>
              <v-btn :disabled="search.length != 11" size="small" color="success" @click="searchSolcitacao()">Buscar</v-btn>
          </template>
        </v-text-field>
        </v-col>

        <v-col cols="12" v-if="searchUserSolicitacao.length">
          <v-card
            class="mx-auto"
            variant="outlined"
            v-for="item, i in searchUserSolicitacao"
            :key="i"
          >
          <template v-if="item.id == 999999">
            <div class="pa-5 text-grey">
              Não foram encontrados resultados para o CPF digitado.
            </div>
          </template>
          <template v-else>
            <v-card-item>
              <div>
                <div class="text-overline mb-1">
                  Entrada: {{ item.data}}
                </div>
                <div class="text-h6 mb-1">
                  Solicitação de Entrada <br>
                  {{ item.casa }}
                </div>
                <div class="text-caption">Aguarde a liberação pela administração do condomínio.</div>
              </div>
            </v-card-item>

            <v-card-actions>
              <v-btn variant="text" @click="cancelar = true, analise = false">
                cancelar pedido
              </v-btn>
              <v-btn color="warning" variant="tonal" @click="cancelar = true, analise = true">
                em análise
              </v-btn>
            </v-card-actions>
          </template>

        </v-card>
        </v-col>

        <v-col cols="12" v-else>
          <v-alert icon="mdi-information" class="text-left text-subtitle-1 text-grey">
            Os resultados da busca apareceram aqui!
          </v-alert>
        </v-col>
      </v-row>
    </div>

    <!-- dialgo mudanca entrada -->
    <v-dialog
      v-model="dialog"
      width="850"
     >
      <dialogEntrada @close="closeDialogEntrada()" />
    </v-dialog>

    <!-- dialog da analise do pedido -->
    <v-dialog
      v-model="cancelar"
      width="850">
      <v-card>
        <v-card-title class="bg-green d-flex">
              <div>Análise do pedido</div>
              <v-spacer></v-spacer>
              <v-btn icon="mdi-close" color="transparent" flat @click="cancelar = false"></v-btn>
        </v-card-title>
        <v-card-text v-if="analise">
          <h5 class="text-h6">Aguarde a análise da sua solicitação!!</h5>
          <p>Em breve sua solicitação será analisada pela administração do condomínio e informada diretamente pela aplicação.</p>
          <p>Fique atento!!</p>
          <p>As mudanças são feitas em horário comercial, de segunda a sexta das 08:00 às 12:00 e das 14:00 às 18:00 e sábado das 08:00 as 12:00hrs</p>

          <v-row class="my-5">
            <v-spacer></v-spacer>
            <v-btn class="mr-2" @click="cancelar = false">Fechar</v-btn>
          </v-row>

        </v-card-text>
        <v-card-text v-else>
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

  </div>
</template>

<script>
  import { useMudancaStore } from '@/store/MudancaStore'
  const mudancaStore = useMudancaStore()
  import dialogEntrada from '@/components/mudanca/dialogEntrada.vue'

  export default {
    data(){
      return{
        pedido: false,
        dialog: false,
        save: false,
        cancelar: false,
        analise: false,
        search: '',
        rules:{
            mincpf: (v) => (v||'').length == 11 || "CPF possui 11 dígitos",
        }
      }
    },
    components:{
      dialogEntrada
    },
    computed:{
      searchUserSolicitacao(){
        return mudancaStore.readSearchSolicitacao
      }
    },
    methods: {
      readListCheck(item){
        this.reads.push(item)
      },
      openMsg(item){
        this.readListCheck(item)
        this.$router.push(`avisosmsg/${item}`)
        console.log(this.reads);
      },
      isReadMsg(item){
        const isExist = this.reads.find( x => x == item)
        return isExist
        ? true
        : false
      },
      closeDialogEntrada(){
        this.dialog = false
      },
      searchSolcitacao(){
        mudancaStore.searchUserEntrada(this.search)
      }
    },
  }
</script>

<style scoped>

</style>
