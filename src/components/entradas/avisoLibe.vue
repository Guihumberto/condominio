<template>
  <v-card>
    <v-card-title class="bg-success d-flex">
      Aviso
      <v-spacer></v-spacer>
      <v-btn color="transparent" variant="flat" @click="$emit('closeDialog')"><v-icon>mdi-close</v-icon></v-btn>
    </v-card-title>
    <v-card-text>
      <h1>Sua solicitação de entrada foi enviada para portaira!</h1>
      <div class="my-5">
        <p>A liberação foi enviada para portaria, ainda sim o porteiro poderá te ligar para fazer algumas confirmações para maior segurança do condomínio.</p>
        <p class="my-2">Então, fique atento a possíveis ligações da portaria</p>
        <p>Até mais!!</p>
      </div>
      <v-row class="my-3">
        <v-spacer></v-spacer>
        <v-btn color="grey" @click="$emit('closeDialog')">Fechar</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
