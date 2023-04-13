<template>
  <div v-motion-slide-bottom>
    <v-btn
      to="/"
      flat
      color="grey"><v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <h1 class="text-h2">Avisos</h1>
    <v-list lines="three">
      <v-list-subheader>Últimos Comunicados</v-list-subheader>

      <v-list-item
        v-for="item, i in listComunicados" :key="i"
        class="border mb-1"
        @click="openMsg(item.id)"
      >
        <v-list-item-title :class=" isReadMsg(item.id) ? 'font-weight-black' : ''">{{ item.title }}</v-list-item-title>

        <v-list-item-subtitle>
        {{ item.text }}
        </v-list-item-subtitle>

        <template v-slot:append>
          <v-icon size="x-small">mdi-calendar</v-icon>
          <small> {{ item.dateCreate }}</small>
        </template>

      </v-list-item>
    </v-list>

    <v-pagination v-model="pagination.page" :length="totalPage"></v-pagination>
  </div>
</template>

<script>
  import { useReadStore } from '../store/ReadStore'
  const readStore = useReadStore()

  export default {
    data(){
      return{
        pagination:{
          page: this.$route.params.page,
          perPage: 4
        },
      }
    },
    watch:{
      'pagination.page': 'updatePage',
    },
    computed:{
      list(){
        return readStore.readListComunicados
      },
      listRead(){
        return readStore.readListRead
      },
      listComunicados(){

        let page = this.pagination.page - 1
        let start = page * this.pagination.perPage
        let end = start + this.pagination.perPage

        let list = this.list.sort(this.order)

        return list.slice(start, end)
      },
      totalPage(){
        return Math.ceil(this.list.length/this.pagination.perPage)
      }
    },
    methods: {
      readListCheck(item){
        if(this.isReadMsg(item)){
          readStore.addReadList(item)
        }
      },
      openMsg(item){
        this.readListCheck(item)
        this.$router.push(`avisosmsg/${item}`)

      },
      isReadMsg(item){
        const isExist = this.listRead.find( x => x == item)
        return isExist
        ? false
        : true
      },
      order(a, b){
          return b.id - a.id
      },
      updatePage(){
        this.$router.push(`${this.pagination.page}`)
      }
    },

  }
</script>

<style scoped>

</style>
