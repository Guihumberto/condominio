<template>
 <v-card
    variant="flat"
  >
    <v-list>
      <v-list-subheader>Visão</v-list-subheader>
      <v-list-item
        v-for="(item, i) in areaList"
        :key="i"
        :value="item"
        active-color="success"
        @click.stop="goTo(item)"
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
  import { useMainStore } from "../../store/MainStore";
  const mainStore = useMainStore();

  export default {
    data: () => ({
    }),
    computed:{
      areaList(){
        return mainStore.readListArea
      }
    },
    methods:{
      goTo(item){
          mainStore.selectArea(item)
          this.$router.push(item.path)
      }
    }
  }
</script>

<style scoped>

</style>
