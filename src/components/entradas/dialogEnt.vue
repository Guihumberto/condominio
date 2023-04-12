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
            <span class="py-2-">Cadastrar nova entrada</span>
            <v-spacer></v-spacer>
            <v-btn color="transparent" flat  @click="dialog = false, save = false"><v-icon>mdi-close</v-icon></v-btn>
          </v-card-title>
          <v-card-text v-if="!save">
            <v-item-group mandatory>
              <v-container>
                Escolha o tipo de entrada abaixo:
                <v-row class="mt-2">
                  <v-col
                    v-for="item, i in items"
                    :key="i"
                    cols="12"
                    md="4"
                    @click="entrada.type = item.id"
                  >
                    <v-item v-slot="{ isSelected, toggle }">
                      <v-img
                        :src="item.src"
                        cover
                        height="150"
                        class="text-right pa-2"
                        @click="toggle"
                      >
                        <v-btn :color="isSelected ? 'green' : 'white'" :icon="isSelected ? 'mdi-check-circle' : 'mdi-check-circle-outline'"></v-btn>
                      </v-img>
                    </v-item>
                  </v-col>
                </v-row>
                <v-alert class="mt-3 mx-n4" color="error" icon="mdi-alert" v-if="typeSelect">
                  Escolher uma opção acima!
                </v-alert>
              </v-container>
            </v-item-group>
            <v-form @submit.prevent="saveNewEntradas()" ref="form">

              <v-text-field
                label="Nome do Estabelecimento"
                placeholder="Digite o nome do estabelecimento"
                v-model="entrada.name"
                variant="outlined"
                :rules="[rules.required, rules.minname]"
                clearable
              ></v-text-field>
              <v-textarea
                label="Observações"
                class="mt-2"
                variant="outlined"
                v-model="entrada.obs"
                placeholder="Digite aqui alguma observação para portaria, se houver"
              ></v-textarea>
              <v-col class="pa-0">
                <div class="text-right">
                  <v-btn flat class="mr-2" color="grey" @click="dialog = false">Cancelar</v-btn>
                  <v-btn color="success" type="submit">salvar</v-btn>
                </div>
              </v-col>
            </v-form>
          </v-card-text>
          <v-card-text v-else>
            <h1>Sua solicitação de entrada foi enviada para portaira!</h1>
            <div class="my-5">
              <p>A liberação foi enviada para portaria, ainda sim o porteiro poderá te ligar para fazer algumas confirmações para maior segurança do condomínio.</p>
              <p class="my-2">Então, fique atento a possíveis ligações da portaria</p>
              <p>Até mais!!</p>
            </div>
            <v-row class="my-3">
              <v-spacer></v-spacer>
              <v-btn variant="text" color="primary" @click="save = false">Fazer outra liberação</v-btn>
              <v-btn color="grey" @click="dialog = false, save = true">Fechar</v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>
<script>
  import { useEntradaStore } from '@/store/EntradaStore'
  const entradaStore = useEntradaStore()


  export default {
    data () {
      return {
        dialog: false,
        save: false,
        selection: [],
        typeSelect: false,
        entrada:{
          name: "",
          type: "",
          obs:"",
          dateCreate: "",
          idCasa: "Casa05",
          active: true
        },
        rules:{
            required: (value) => !!value || "Campo obrigatório",
            email: (v) => /.+@/.test(v) || "Deve ser um e-mail válido",
            minname: (v) => (v||'').length >= 4 || "Mínimo 4 caracteres",
        },
      }
    },
    computed:{
      items(){
        return entradaStore.readListTypes
      },
    },
    methods:{
      async saveNewEntradas(){
        const { valid } = await this.$refs.form.validate()
        if(valid){
          if(!this.entrada.type){
            this.entrada.type = 3
          }
          this.entrada.dateCreate = Date.now()
          this.save = true
          entradaStore.addEntradaList(this.entrada)
          this.clearFieldsEntrada()
        }
      },
      clearFieldsEntrada(){
        this.entrada = {
          name: "",
          type: "",
          obs:"",
          dateCreate: "",
          idCasa: "Casa05",
          active: true
        }
      }
    },
  }
</script>
