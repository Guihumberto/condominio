<template>
  <div class="text-center">
    <v-btn
      color="success"
      size="small"
      prepend-icon="mdi-plus"
    >
      Nova

      <v-dialog
        v-model="dialog"
        activator="parent"
        max-width="880"
      >
        <v-card>
          <v-card-title class="bg-success d-flex justify-space-between">
            <div>
              <v-icon size="small">mdi-umbrella-beach-outline</v-icon> Solicitação de Reserva
            </div>
            <v-btn @click="dialog = false" flat color="transparent"><v-icon icon="mdi-close"></v-icon></v-btn>
          </v-card-title>
          <v-card-text v-if="!save">
            <v-form @submit.prevent="saveReserva()" ref="form">
              <v-text-field
                label="Data"
                variant="outlined"
                type="date"
                v-model="reserva.data"
                :rules="[rules.required]"
              ></v-text-field>
              <v-textarea
                label="Observação"
                variant="outlined"
                v-model.trim="reserva.obs"
                placeholder="Deixe alguma mensagem ao administrador, caso necessário.."
              ></v-textarea>
              <div class="text-right">
                <v-btn variant="text" class="mr-2" color="primary" @click="dialog = false">Cancelar</v-btn>
                <v-btn color="success" type="submit">Enviar</v-btn>
              </div>
            </v-form>

          </v-card-text>
          <v-card-text v-else>
            <h6 class="text-h4">Sua solicitação foi feita com sucesso!</h6>
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
                <v-btn class="mr-2" variant="text" color="success" @click="save = false">Fazer uma nova reserva</v-btn>
                <v-btn variant="text" color="primary" @click="dialog = false">Fechar</v-btn>
              </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>

<script>
  import { useReservaStore } from '@/store/ReservaStore'
  const reservaStore = useReservaStore()
  export default {
    data () {
      return {
        dialog: false,
        reserva:{
          data: null,
          casa: "Casa 05",
          obs: "",
          pay: false,
          dateCreate: null
        },
        save: false,
        rules:{
            required: (value) => !!value || "Campo obrigatório",
        },
      }
    },
    methods:{
      async saveReserva(){
        const { valid } = await this.$refs.form.validate()

        if(valid){
          this.reserva.dateCreate = Date.now()
          this.reserva.id = 5
          this.save = true
          reservaStore.addReservas(this.reserva)
        }
      }
    }
  }
</script>

<style scoped>

</style>
