<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between" :class="color">
      <span class="my-auto">{{ dataConfirm.title }}</span>
      <v-btn @click="$emit('close')" color="transparent" flat icon="mdi-close" />
    </v-card-title>
    <v-card-text>
      <p class="text-subtitle-1 mt-5 text-center">{{ dataConfirm.text }}</p>
      <div class="d-flex justify-center my-5">
        <v-btn @click="$emit('close')">Não</v-btn>
        <v-btn class="ml-5" color="primary" @click="$emit('confirmYes')">Sim</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props:{
      dataConfirm: Object,
    },
    computed:{
      color(){
        return this.dataConfirm.color == 'red'
        ? 'bg-error'
        : 'bg-success'
      }
    }
  }
</script>

<style scoped>

</style>
