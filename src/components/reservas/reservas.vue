<template>
  <div class="text-center">
    <v-btn
      color="info"
      size="small"
      prepend-icon="mdi-information"
    >
      Informações

      <v-dialog
        v-model="dialog"
        activator="parent"
        max-width="880"
      >
        <v-card>
          <v-card-title class="bg-success d-flex justify-space-between">
            <div>
              <v-icon size="small">mdi-information</v-icon> Informações
            </div>
            <v-btn @click="dialog = false" flat color="transparent"><v-icon icon="mdi-close"></v-icon></v-btn>
          </v-card-title>
          <v-card-text>
           Horário das 08:00 às 22:00hrs <br>
           Taxa de Reserva: R$ 0,00
            <v-list>
              <h6 class="text-h6">Mesas e Cadeiras</h6>
              <v-list-item>
                Mesas 6 lugares: 10 und
              </v-list-item>
              <v-list-item>
                Mesas 4 lugares: 10 und
              </v-list-item>
              <v-list-item>
                Cadeiras: 40 und
              </v-list-item>
              <h6 class="text-h6">Eletros</h6>
              <v-list-item>
               1 Microondas
              </v-list-item>
              <v-list-item>
               1 Freezer
              </v-list-item>
            </v-list>
            <h6 class="text-h6">Orientações sobre entrega e recebimento</h6>
            <p class="text-subtitle-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius minus totam aut suscipit velit est molestiae rerum nam non corporis facere, distinctio iste quia veritatis, pariatur delectus. Ea, ab!</p>

          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="dialog = false">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },

  }
</script>

<style scoped>

</style>
