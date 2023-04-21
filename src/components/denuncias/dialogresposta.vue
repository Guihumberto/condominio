<template>
  <v-card>
    <v-card-item>
      <div class="d-flex align-center justify-space-between">
        <h6 class="text-h6">Resposta</h6>
        <v-btn icon="mdi-close" flat @click="$emit('close')" />
      </div>

      <v-divider class="my-5"></v-divider>

      <div class="mb-5 border pa-2">
        <h5 class="text-h6">{{ response.title }}</h5>
        <div>
          <p class="text-subtitle-1">{{ response.text }}</p>
        </div>
      </div>

      <div>
        <h5 class="text-h6">Resposta da Administração</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt perferendis est,
          obcaecati velit harum minus iure error non voluptates dicta delectus quo temporibus officiis
          commodi. A quo qui dolorem.
        </p>
        <p class="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt perferendis est,
          obcaecati velit harum minus iure error non voluptates dicta delectus quo temporibus officiis
          commodi. A quo qui dolorem.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt perferendis est,
          obcaecati velit harum minus iure error non voluptates dicta delectus quo temporibus officiis
          commodi. A quo qui dolorem.
        </p>
        <div class="mt-5 text-right">
          à Administração <br>
          São Luis - MA, 12/12/2023
        </div>
      </div>
    </v-card-item>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="mr-2" @click="$emit('close')">Fechar</v-btn>
      <v-btn color="success">Feedback</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
  export default {
    props:{
      response: Object
    }
  }
</script>

<style scoped>

</style>
