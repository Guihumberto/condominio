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
            <span class="py-2-">Cadastrar novo vistante</span>
            <v-spacer></v-spacer>
            <v-btn color="transparent" flat  @click="dialog = false, save = false"><v-icon>mdi-close</v-icon></v-btn>
          </v-card-title>
          <v-card-text v-if="!save">
            <v-form @submit.prevent="saveNewEntradas()" ref="form">

              <v-text-field
                label="Nome"
                placeholder="Digite o nome"
                v-model="entrada.name"
                variant="outlined"
                :rules="[rules.required, rules.minname]"
                clearable
              ></v-text-field>
              <v-text-field
                label="Parentesco"
                placeholder="Exemplo: pai, tio, primo, amigo, etc"
                v-model="entrada.parentesco"
                variant="outlined"
                :rules="[rules.required, rules.minname]"
                clearable
              ></v-text-field>
              <div>
                <v-tooltip text="Marque recorrente para autorizar a entrada sem necessidade de ligação da portaria" location="top">
                  <template v-slot:activator="{ props }">
                    <v-switch
                      label="Recorrente"
                      v-bind="props"
                      color="primary"
                      v-model="entrada.recorrent"
                      title="Marque recorrente para autorizar a entrada sem necessidade de ligação da portaria"
                    ></v-switch>
                  </template>
                </v-tooltip>
              </div>
              <v-row class="mb-5" justify="space-around">
                <v-col cols="12" sm="4">
                  <v-btn prepend-icon="mdi-car-hatchback" @click="entrada.type = 1, typeEmpty = false" :color="entrada.type == 1 ? 'primary' : 'grey'">
                    Entrada com carro
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-btn prepend-icon="mdi-walk" @click="entrada.type = 2, typeEmpty = false" :color="entrada.type == 2 ? 'primary' : 'grey'">
                    Entrada sem carro
                  </v-btn>
                </v-col>
                </v-row>
                <v-alert v-if="typeEmpty" color="red-lighten-4" class="text-red mb-5">
                  Informar o tipo de entrada
                </v-alert>

              <v-col class="pa-0">
                <div class="text-right">
                  <v-btn flat class="mr-2" color="grey" @click="dialog = false">Cancelar</v-btn>
                  <v-btn color="success" type="submit">salvar</v-btn>
                </div>
              </v-col>
            </v-form>
          </v-card-text>
          <v-card-text v-else-if="entrada.type == 1">
            <h1 class="text-h6">Cadastrar Veículo</h1>
            <v-form @submit.prevent="saveNewVeiculos()" ref="formcar">
              <div class="d-flex justify-space-evenly my-5">
                <v-btn prepend-icon="mdi-car-hatchback" @click="veiculo.type = 1" :color="veiculo.type == 1 ? 'primary' : 'grey'">Carro</v-btn>
                <v-btn prepend-icon="mdi-motorbike" @click="veiculo.type = 2" :color="veiculo.type == 2 ? 'primary' : 'grey'">Moto</v-btn>
              </div>
              <v-text-field
                label="Modelo/Marca"
                placeholder="exemplo: corolla/toyota"
                v-model="veiculo.carro"
                variant="outlined"
                :rules="[rules.required, rules.minname]"
                clearable
              ></v-text-field>
              <v-text-field
                label="Cor"
                placeholder="excemplo: branco"
                v-model="veiculo.cor"
                variant="outlined"
                :rules="[rules.required, rules.minname]"
                clearable
              ></v-text-field>
              <v-text-field
                label="Placa"
                placeholder="exemplo: NHJ-9999"
                v-model="veiculo.placa"
                variant="outlined"
                :rules="[rules.required, rules.minname]"
                clearable
              ></v-text-field>

              <div class="text-right">
                <v-btn color="success" type="submit">Salvar</v-btn>
              </div>


            </v-form>
          </v-card-text>
          <v-card-text v-else>
            <h1>Seu cadastro de visitante foi enviada para portaria!</h1>
            <div class="my-5">
              <p>O cadastro do visitante {{ entrada.name }} foi enviada para portaria, excepcionalmente o porteiro poderá te ligar para fazer algumas confirmações para maior segurança do condomínio.</p>
              <p class="my-2">Então, fique atento a possíveis ligações da portaria.</p>
              <p>Até mais!!</p>
            </div>
            <v-row class="my-3">
              <v-spacer></v-spacer>
              <v-btn variant="text" color="primary" @click="close()">Fazer outra liberação</v-btn>
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
        veiculo:{
          id: 5,
          carro: "",
          cor: "",
          placa: "",
          type: 1,
        },
        rules:{
            required: (value) => !!value || "Campo obrigatório",
            email: (v) => /.+@/.test(v) || "Deve ser um e-mail válido",
            minname: (v) => (v||'').length >= 3 || "Mínimo 4 caracteres",
        },
        typeEmpty: false,
      }
    },
    computed:{

    },
    methods:{
      async saveNewVeiculos(){
        const { valid } = await this.$refs.formcar.validate()
        if(valid){
          this.typeEmpty = false
          this.entrada.type = null
          this.save = true
          visitanteStore.addVeiculosList(this.veiculo)
          this.entrada.veiculo.push(this.veiculo.id)
          visitanteStore.updateActive(this.entrada)
          // this.clearFieldsEntrada()
        }
      },
      async saveNewEntradas(){
        const { valid } = await this.$refs.form.validate()
        this.typeEmpty = false
        if(valid){
          if(!this.entrada.type){
            this.typeEmpty = true
            return
          }
          this.entrada.dateCreate = Date.now()
          this.save = true
          visitanteStore.addEntradaList(this.entrada)
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
      clearVeiculo(){
        this.veiculo = {
          id: 5,
          modelo: "",
          color: "",
          placa: "",
          type: 1,
        }
      },
      close(){
        this.clearVeiculo()
        this.clearFieldsEntrada()
        this.save = false
      }
    },
  }
</script>
