<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/admin/administracao"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-xs-h2 text-md-h2">Avisos</h1>
    <p class="text-subtitle-1">Publicar e editar e avisos para os moradores.</p>

    <div style="max-width: 880px;" class="mx-auto mt-15">
      <div class="text-right">
        <v-btn prepend-icon="mdi-pencil-outline" color="success" to="/admin/avisos/new">Escrever</v-btn>
      </div>
      <v-divider class="my-5"></v-divider>

      <v-list nav class="border py-0">
        <v-list-subheader>Aguardando Publicação</v-list-subheader>
        <v-list-item @click.stop="comunicadoNaTela(item)"  v-if="listPendentes.length" class="border-t" v-for="item, i in listPendentes" :key="i">
          <template v-slot:prepend>
            <v-icon>
              mdi-timer-sand
            </v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
          <template v-slot:append>
            <div class="d-flex text-center">
              <!-- <p class="text-caption mb-1" v-if="item.programado"> <v-chip size="x-small" color="primary">Publicação automática</v-chip> <br>  12/12/2023</p> -->
              <v-btn size="small" color="error" variant="outlined" class="mr-2" @click.stop="deleteAviso(item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-btn size="small" color="grey" variant="outlined" class="mr-2">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn size="small" color="success" variant="outlined" @click.stop="confirm(item)">
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </div>
          </template>
        </v-list-item>
        <v-alert v-else icon="mdi-information">
          <p class="text-subtitle-1">Não existem avisos criados aguradando publicação.</p>
        </v-alert>
      </v-list>

      <v-list nav class="border py-0 mt-5">
        <v-list-subheader>Avisos Publicados</v-list-subheader>
        <v-list-item @click.stop="comunicadoNaTela(item)" class="border-t" v-for="item, i in listPublicados" :key="i">
          <template v-slot:prepend>
            <v-icon>
              mdi-note-text-outline
            </v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
          <template v-slot:append>
           <div class="text-center">
            <div class="text-caption"><v-icon size="small">mdi-calendar</v-icon> {{ item.dateCreate}}</div>
           </div>
          </template>
        </v-list-item>
        <v-list-item class="border-t">
          <v-pagination length="1" v-model="page"></v-pagination>
        </v-list-item>
      </v-list>

      <!-- confirmar exclusao do aviso -->
      <v-dialog v-model="dialogConfirm"  width="auto">
        <v-card>
          <v-card-title class="d-flex justify-space-between bg-success">
            <span class="my-auto">Confirmação</span>
            <v-btn @click="dialogConfirm = false" color="transparent" flat icon="mdi-close" />
          </v-card-title>
          <v-card-text>
            <p class="text-subtitle-1 mt-5">Deseja fazer a publicação do comunicado agora?</p>
            <div class="d-flex justify-center my-5">
              <v-btn @click="dialogConfirm = false">Não</v-btn>
              <v-btn class="ml-5" color="primary" @click="sendConfirmation(aviso)">Sim</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- vizualizar o aviso no dialog -->
      <v-dialog v-model="viewAviso" max-width="1080">
        <v-card>
          <v-card-item>
            <div class="d-flex justify-space-between align-center">
              <div>Texto para leitura</div>
              <v-btn @click="viewAviso = false" flat icon="mdi-close" />

            </div>
          </v-card-item>
          <v-card-item class="border ma-5">
            <h1 class="text-h4 mb-5">{{ comunicadoScreen.title }}</h1>
            <div class="text-subtitle-1" >
              <p class="my-5">
                {{ comunicadoScreen.text }}
              </p>

              <div class="text-right my-5">
                <div class="text-center">
                  <p class="my-5">São Luís - MA, 19 de abril de 2023</p>
                  <p>Administração</p>
                </div>
              </div>
            </div>
          </v-card-item>
        </v-card>
      </v-dialog>

      <!-- dialog de exclusao  -->
      <v-dialog v-model="dialogExclusao" max-width="580">
        <dialogTela :dataConfirm="dataConfirm" @close="dialogExclusao = false" @confirmYes="confirmExclusao()" />
      </v-dialog>

    </div>

  </div>
</template>

<script>
  import dialogTela from '@/components/Confirm.vue'
  import { useReadStore } from '@/store/ReadStore'
  const readStore = useReadStore()

  export default {
    components:{
      dialogTela
    },
    data(){
      return{
        page: 1,
        dialogConfirm: false,
        aviso: null,
        viewAviso: false,
        comunicadoScreen: {},
        dialogExclusao: false,
        dataExclusao: {},
        dataConfirm: {}
      }
    },
    computed:{
      listAvisos(){
        return readStore.readAllAvisos
      },
      listPendentes(){
        return this.listAvisos.filter(x => !x.show)
      },
      listPublicados(){
        return this.listAvisos.filter(x => x.show)
      }
    },
    methods: {
      confirm(item){
        this.aviso = item
        this.dialogConfirm = true
      },
      sendConfirmation(item){
        readStore.pusblish(item)
        this.aviso = null
        this.dialogConfirm = false
      },
      comunicadoNaTela(item){
        this.viewAviso = true
        this.comunicadoScreen = item
      },
      deleteAviso(item){
        this.dialogExclusao = true
        this.dataExclusao = item
        this.dataConfirm = {
          color: 'red',
          title: "Confirmação de Exclusão",
          text: "Deseja fazer a exclusão da publicação?"
        }
      },
      confirmExclusao(){
        this.dialogExclusao = false
        console.log(this.dataExclusao);
      }
    },
  }
</script>

<style scoped>

</style>
