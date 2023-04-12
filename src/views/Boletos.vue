<template>
  <div>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Boletos</h1>
    <v-list lines="three">
      <v-list-subheader>Lista de boletos</v-list-subheader>

      <v-autocomplete
        label="Ano"
        variant="outlined"
        prepend-inner-icon="mdi-calendar"
        :items="['2023', '2022']"
        v-model="yearSelected"
      ></v-autocomplete>

      <v-list-item
        v-for="item, i in reads.sort((a,b) => b.id - a.id)" :key="i"
        class="border mb-1"
      >
        <v-list-item-title class="font-weight-black">{{item.mes}}</v-list-item-title>

        <v-list-item-subtitle>
         Código de Barra: 00000.000000.00000.0.0000000.0000
        </v-list-item-subtitle>

        <template v-slot:append>
          <v-btn disabled v-if="item.pay" variant="text" color="success">Pago</v-btn>
          <v-btn v-else variant="text" color="primary" @click="copyCodeBar(item)">Copiar</v-btn>
        </template>

      </v-list-item>
    </v-list>

    <v-pagination :length="1"></v-pagination>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        yearSelected: 2023,
        reads: [
          {id: 1, mes: "Janeiro/2023", year: 2023, codbara: "0000000000.0000000000000000.000000000000000", pay: true},
          {id: 2, mes: "Fevereiro/2023", year: 2023, codbara: "0000000000.0000000000000000.000000000000000", pay: true},
          {id: 3, mes: "Março/2023", year: 2023, codbara: "0000000000.0000000000000000.000000000000000", pay: true},
          {id: 4, mes: "Abril/2023", year: 2023, codbara: "0000000000.0000000000000000.000000000000000", pay: false},
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
