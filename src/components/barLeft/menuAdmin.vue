<template>
 <v-card
    variant="flat"
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="primary"
        @click.stop="goTo(item.path)"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  import { useAdminStore } from "../../store/administracao/AdminStore";
  const adminStore = useAdminStore();

  export default {
    data: () => ({

    }),
    computed:{
      items(){
        return adminStore.readListMenu
      }
    },
    methods:{
      goTo(item){
        if(item == 'avisos'){
          this.$router.push(`${item}/1`)
        } else {
          this.$router.push(item)
        }
      }
    }
  }
</script>

<style scoped>

</style>
