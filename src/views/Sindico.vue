<template>
  <div>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Síndico</h1>

    <div class="text-center">
      <v-avatar color="grey" size="180"><v-icon size="180">mdi-account</v-icon></v-avatar>
      <h5 class="text-h5 mt-5">Nome do Síndico</h5>
      <h5 class="text-h6 mb-5">2020 - 2023</h5>

      <div class="text-left">
        <h5 class="text-h6">Sobre</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque modi quibusdam repellendus,
           deleniti nisi ipsa nulla earum illo veniam illum deserunt voluptate libero iusto laudantium iure hic distinctio exercitationem voluptatum.</p>
      </div>
      <div class="text-left mt-5">
        <h5 class="text-h6">Contato</h5>

        <v-list class="border">
          <v-list-item>
            <v-list-item-title>Telefone</v-list-item-title>
            <v-list-item-subtitle>
              <v-icon size="small">mdi-phone</v-icon>
              98 - 9999-4444
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Whatsapp</v-list-item-title>
            <v-list-item-subtitle>
              <v-icon size="small">mdi-whatsapp</v-icon>
              98 - 9999-4444
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>E-mail</v-list-item-title>
            <v-list-item-subtitle>
              <v-icon size="small">mdi-email</v-icon>
            exemple@hotmail.com
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>


      </div>

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
