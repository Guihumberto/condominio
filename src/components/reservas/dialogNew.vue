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

              <v-dialog
                v-model="showDateDialog"
                persistent
                lazy
                width="290px"
                full-width
              >

              <template v-slot:activator="{ props  }">
                <v-text-field
                  label="Data"
                  variant="outlined"
                  prepend-inner-icon="mdi-calendar"
                  type="date"
                  :value="formatteDate"
                  readonly
                  v-bind="props"
                ></v-text-field>
              </template>

              <DatePicker
                color="blue"
                locale="pt-br"
                scrollable
                v-model.string="dateDialogValue"
                :disabled-dates="disabledDates"
                :min-date="minDate"

              > </DatePicker>
              <div class="d-flex justify-center mt-n5 mr-10">
                <v-btn variant="flat" @click="cancelDateDialog()">Cancelar</v-btn>
                <v-btn color="primary" @click="reserva.data = dateDialogValue, showDateDialog = false">OK</v-btn>
              </div>
            </v-dialog>



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
  import moment from 'moment'
  import { DatePicker } from 'v-calendar';
  import 'v-calendar/style.css';

  import { useReservaStore } from '@/store/ReservaStore'
  const reservaStore = useReservaStore()

  export default {
    data () {
      return {
        dialog: false,
        showDateDialog: false,
        dateDialogValue: moment().format('YYYY-MM-DD'),
        minDate: new Date().setHours(0,0,0,0),
        hoje: moment().format('YYYY-MM-DD'),
        reserva:{
          data: moment().format('YYYY-MM-DD'),
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
    components:{
      DatePicker
    },
    computed:{
      formatteDate(){
        return moment(this.reserva.data).format('YYYY-MM-DD')
      },
      disabledDates(){
        let disableDatas = reservaStore.readReservas.map( x => new Date(x.data))
        return disableDatas
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
      },
      cancelDateDialog(){
       this.dateDialogValue = this.reserva.data
       this.showDateDialog = false
      }
    }
  }
</script>

<style scoped>

</style>
