<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Correios</h1>
    <p class="text-subtitle-1">Encomendas na portaria</p>

    <div style="max-width: 880px;" class="mx-auto mt-15">
      <v-list lines="two">
        <v-list-item
          class="border mb-1"
        >
          <v-list-item-title class="font-weight-black">Aviso de Encomendas</v-list-item-title>
          <v-list-item-subtitle>
            <v-icon size="x-small">mdi-calendar</v-icon>
            <small> 12/12/2023</small>
          </v-list-item-subtitle>

          <v-list-item-subtitle class="mt-5">
          Existem encomendas entregues para sua casa para serem retirados na portaria
          </v-list-item-subtitle>

          <template v-slot:append>
            <v-sheet
              class="d-flex bg-info"
              height="100%"
            >
              <v-sheet class="ma-2 pa-2 align-self-center">
                <v-icon color="success">mdi-gift</v-icon>
              </v-sheet>
            </v-sheet>
          </template>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        reads: []
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
