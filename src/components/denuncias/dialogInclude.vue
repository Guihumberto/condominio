<template>
  <div class="text-right">
    <v-btn prepend-icon="mdi-plus" color="success">

      Novo

      <v-dialog
        v-model="dialog"
        activator="parent"
        width="800"
        persistent
      >
        <v-card>
          <v-card-title class="bg-success d-flex">
            <span class="py-2-">Denúncia e Reclamações</span>
            <v-spacer></v-spacer>
            <v-btn color="transparent" flat  @click="dialog = false, save = false"><v-icon>mdi-close</v-icon></v-btn>
          </v-card-title>
          <v-card-text v-if="!save">
            <v-form @submit.prevent="saveNewEntradas()" ref="form">

              <v-text-field
                label="Título"
                placeholder="Digite um título para sua denúncia/reclamação"
                v-model="entrada.name"
                variant="outlined"
                :rules="[rules.required, rules.minname]"
                clearable
              ></v-text-field>
              <v-textarea
                label="Denúncia"
                placeholder="Relate com poucas palavras a ocorrência objeto de denúncia ou reclamação."
                v-model="entrada.parentesco"
                variant="outlined"
                :rules="[rules.required, rules.minname]"
                clearable
              ></v-textarea>


              <v-col class="pa-0">
                <div class="text-right">
                  <v-btn flat class="mr-2" color="grey" @click="dialog = false">Cancelar</v-btn>
                  <v-btn color="success" type="submit">Enviar</v-btn>
                </div>
              </v-col>
            </v-form>
          </v-card-text>
          <v-card-text v-else>
            <h1>Sua denúncia/reclamação foi enviada com sucesso!</h1>
            <div class="my-5">
              <p>Em breve você receberá uma resposta sobre a solictação enviada.</p>
              <p class="my-2">Todas as reclamações serão respondidas pela aplicação.</p>
              <p>Até mais!!</p>
            </div>
            <v-row class="my-3">
              <v-spacer></v-spacer>
              <v-btn variant="text" color="primary" @click="close()">Fazer outra denúncia/reclamação</v-btn>
              <v-btn color="grey" @click="dialog = false, close()">Fechar</v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>
<script>
  import { useVisitantesStore } from '@/store/VisitantesStore'
  const visitanteStore = useVisitantesStore()

  export default {
    data () {
      return {
        dialog: false,
        save: false,
        selection: [],
        typeSelect: false,
        entrada:{
          id: 5,
          name: "",
          type: "",
          parentesco:"",
          dateCreate: "",
          idCasa: "Casa05",
          recorrent: false,
          veiculo: [],
          veiculos: []
        },
        rules:{
            required: (value) => !!value || "Campo obrigatório",
            email: (v) => /.+@/.test(v) || "Deve ser um e-mail válido",
            minname: (v) => (v||'').length >= 3 || "Mínimo 4 caracteres",
        },
        typeEmpty: false,
      }
    },

    methods:{

      async saveNewEntradas(){
        const { valid } = await this.$refs.form.validate()
        this.typeEmpty = false
        if(valid){
          this.entrada.dateCreate = Date.now()
          this.save = true
          console.log('salvo');
          // this.clearFieldsEntrada()
        }
      },
      clearFieldsEntrada(){
        this.entrada = {
          name: "",
          type: "",
          parentesco:"",
          dateCreate: "",
          idCasa: "Casa05",
          recorrent: false
        }
      },
      close(){
        this.clearFieldsEntrada()
        this.save = false
      }
    },
  }
</script>
