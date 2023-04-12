<template>
  <v-card>
    <v-card-item>
      <h6 class="text-h6">Resposta</h6>

      <v-divider class="my-5"></v-divider>

      <div>
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
      <v-btn @click="$emit('close')">Fechar</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
