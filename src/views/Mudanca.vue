<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Mudança</h1>
    <h6 class="text-subtitle-1">Informe a data da mudança a administração.</h6>

    <div style="max-width: 880px;" class="mx-auto mt-15 text-center">
      <v-row v-if="!pedido" class="mt-5">
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
        <v-card
          class="mx-auto"
          variant="outlined"
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                Entrada: 12/12/2023
              </div>
              <div class="text-h6 mb-1">
                Solicitação de Entrada
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
        </v-card>
      </v-row>
    </div>
    <v-dialog
      v-model="dialog"
      width="850"
     >
      <v-card>
        <v-card-title class="bg-green d-flex">
              <div>Mudança</div>
              <v-spacer></v-spacer>
              <v-btn icon="mdi-close" color="transparent" flat @click="dialog = false"></v-btn>
        </v-card-title>
        <v-card-text v-if="!save">
          <v-text-field
            label="Nome"
            variant="outlined"
            placeholder="Digite o nome completo"
          ></v-text-field>
          <v-text-field
            label="Nro da Casa"
            variant="outlined"
            placeholder="Digite o número da casa"
          ></v-text-field>
          <v-text-field
            label="Data da mudança"
            variant="outlined"
            type="date"
            placeholder="Digite o número da casa"
          ></v-text-field>
          <v-textarea
            label="Observação"
            variant="outlined"
            placeholder="Informe alguma peculiaridade na mudança, caso necessário."
          ></v-textarea>
          <v-row class="my-5">
            <v-spacer></v-spacer>
            <v-btn class="mr-2" @click="dialog = false">Fechar</v-btn>
            <v-btn color="success" @click="save = true, pedido = true">Salvar</v-btn>
          </v-row>

        </v-card-text>
        <v-card-text v-else class="border ma-5">
          <h5 class="text-h6">Sua solicitação foi enviada com sucesso!!</h5>
          <p>Em breve sua solicitação será analisada pela administração do condomínio e informada diretamente pela aplicação.</p>
          <p>Fiquea atento!!</p>
          <p>As mudanças são feitas em horário comercial, de segunda a sexta das 08:00 às 12:00 e das 14:00 às 18:00 e sábado das 08:00 as 12:00hrs</p>

          <v-row class="my-5">
            <v-spacer></v-spacer>
            <v-btn class="mr-2" @click="dialog = false">Fechar</v-btn>
          </v-row>
        </v-card-text>
      </v-card>


    </v-dialog>

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
  export default {
    data(){
      return{
        pedido: false,
        dialog: false,
        save: false,
        cancelar: false,
        analise: false
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
      }
    },

  }
</script>

<style scoped>

</style>
