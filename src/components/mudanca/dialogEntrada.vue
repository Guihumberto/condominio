<template>
  <v-card>
    <v-card-title class="bg-green d-flex align-center">
          <div>Solicitação de Entrada</div>
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" color="transparent" flat @click="$emit('close')"></v-btn>
    </v-card-title>
    <v-card-text v-if="!save">
      <v-form @submit.prevent="pedidoEntrada()" ref="form">

        <v-text-field
          label="Nome completo"
          variant="outlined"
          placeholder="Digite o nome completo"
          v-model="solicitacao.name"
          :rules="[rules.required, rules.minname]"
        ></v-text-field>

        <v-text-field
          label="CPF"
          variant="outlined"
          class="my-2"
          placeholder="000.000.000-00"
          v-model="solicitacao.cpf"
          :rules="[rules.required, rules.mincpf]"
        ></v-text-field>

        <v-text-field
          label="Nro da Casa"
          variant="outlined"
          placeholder="Digite o número da casa"
          :rules="[rules.required]"
        ></v-text-field>

        <v-dialog
            v-model="showDateDialog"
            persistent
            lazy
            width="290px"
            full-width
          >

          <template v-slot:activator="{ props  }">
            <v-text-field
              label="Data da mudança"
              variant="outlined"
              prepend-inner-icon="mdi-calendar"
              class="my-2"
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
            :min-date="minDate"
            :disabled-dates="disabledDates"
          > </DatePicker>
          <div class="d-flex justify-center mt-n5 mr-10">
            <v-btn variant="flat" @click="cancelDateDialog()">Cancelar</v-btn>
            <v-btn color="primary" @click="solicitacao.data = dateDialogValue, showDateDialog = false">OK</v-btn>
          </div>
        </v-dialog>

        <v-textarea
          label="Observação"
          variant="outlined"
          placeholder="Informe alguma peculiaridade na mudança, caso necessário."
          v-model="solicitacao.obs"
        ></v-textarea>

        <v-row class="my-5">
          <v-spacer></v-spacer>
          <v-btn class="mr-2" @click="$emit('close')">Fechar</v-btn>
          <v-btn color="success" type="submit">Salvar</v-btn>
        </v-row>

      </v-form>
    </v-card-text>

    <v-card-text v-else class="border ma-5">
      <h5 class="text-h6">Sua solicitação foi enviada com sucesso!!</h5>
      <p>Em breve sua solicitação será analisada pela administração do condomínio e informada diretamente pela aplicação.</p>
      <p>Fiquea atento!!</p>
      <p>As mudanças são feitas em horário comercial, de segunda a sexta das 08:00 às 12:00 e das 14:00 às 18:00 e sábado das 08:00 as 12:00hrs</p>

      <v-row class="my-5">
        <v-spacer></v-spacer>
        <v-btn class="mr-2" @click="$emit('close')">Fechar</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  import { useMudancaStore } from '@/store/MudancaStore'
  const mudancaStore = useMudancaStore()
  import moment from 'moment'
  import { DatePicker } from 'v-calendar';
  import 'v-calendar/style.css';

  export default {
    data(){
      return{
        showDateDialog: false,
        dateDialogValue: moment().format('YYYY-MM-DD'),
        minDate: new Date().setHours(0,0,0,0),
        save: false,
        pedido: false,
        solicitacao:{
          name: "",
          cpf: null,
          data: moment().format('YYYY-MM-DD'),
          dateCreate: "",
          obs: ""
        },
        rules:{
            required: (value) => !!value || "Campo obrigatório",
            minname: (v) => (v||'').length >= 4 || "Mínimo 4 caracteres",
            mincpf: (v) => (v||'').length == 11 || "CPF possui 11 dígitos",
        }
      }
    },
    computed:{
      formatteDate(){
        return moment(this.solicitacao.data).format('YYYY-MM-DD')
      },
      disabledDates(){
        let repeat = [{
          repeat: {
            weekdays: [1]
          }
        }]
        return repeat
      }
    },
    components:{
      DatePicker
    },
    methods:{
      async pedidoEntrada(){
        const { valid } = await this.$refs.form.validate()

        if(valid){
          this.solicitacao.dateCreate = Date.now()
          this.solicitacao.type = false
          this.save = true
          this.pedido = true
          mudancaStore.addSolicitacoes(this.solicitacao)
        }
      },
      cancelDateDialog(){
      //  this.dateDialogValue = this.reserva.data
       this.showDateDialog = false
      }
    }
  }
</script>

<style scoped>

</style>
