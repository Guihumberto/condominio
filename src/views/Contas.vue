<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Prestação de Contas</h1>
    <p class="text-subtitle-1">Transparência do condomínio</p>

    <div style="max-width: 880px;" class="mx-auto mt-15">
      <v-autocomplete
        label="Ano"
        variant="outlined"
        prepend-inner-icon="mdi-calendar"
        :items="['2023', '2022']"
        v-model="yearSelected"
      ></v-autocomplete>
      <v-list>
        <v-list-subheader>Lista de boletos</v-list-subheader>


        <v-list-item
          v-for="item, i in reads.sort((a,b) => b.id - a.id)" :key="i"
          class="border mb-1"
        >
          <v-list-item-title class="font-weight-black">{{item.mes}}</v-list-item-title>


        </v-list-item>
      </v-list>

      <v-pagination :length="1"></v-pagination>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        yearSelected: 2023,
        reads: [
          {id: 1, mes: "Janeiro/2023", year: 2023},
          {id: 2, mes: "Fevereiro/2023", year: 2023},
          {id: 3, mes: "Março/2023", year: 2023},
          {id: 4, mes: "Abril/2023", year: 2023},
        ]
      }
    },
    methods: {
      copyCodeBar(item){
        let text = item.codbara
        navigator.clipboard.writeText(text);
        alert("Código de barra copiado para área de transferência: " + text);
      }
    },

  }
</script>

<style scoped>

</style>
