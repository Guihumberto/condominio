<template>
  <v-card
    :title="item.title"
    :subtitle="item.subtitle"
    elevation="5"
    @click.stop="goTo(item.path)"
    :append-icon="item.id == 14 ? 'mdi-adjust' : ''"
  >
    <v-card-item>
      <div class="py-2 text-center">
        <v-badge
          :color="item.id == 2 && countLeftRead ? 'primary': 'transparent'"
          :content="item.id == 2 && countLeftRead ? `${countLeftRead} +` : ''"
        >
          <v-icon
            :color="item.color"
            :icon="item.icon"
            size="100"
          ></v-icon>
        </v-badge>
        <div class="text-h5 font-weight-bold" style="min-height: 63px;">{{item.title}}</div>
        </div>
    </v-card-item>
    <v-card-actions>
      <v-spacer />
      <v-btn
        icon="mdi-information-outline"
        @click.stop="info = true"
      />
    </v-card-actions>
    <v-expand-transition>
      <v-card
        v-if="info"
        style="height: 100%;"
        class="v-card--reveal"
        color="grey"
      >
        <v-card-actions>
          <v-spacer />
          <v-btn
            flat
            @click.stop="info = false"
            size="small"

          ><v-icon>mdi-close</v-icon></v-btn>
        </v-card-actions>
        <v-card-text class="pb-0">
          <p>{{item.info}}</p>
        </v-card-text>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
  import { useReadStore } from '@/store/ReadStore'
  const readStore = useReadStore()

  export default {
    data(){
      return{
        info: false
      }
    },
    props:{
      item: Object
    },
    computed:{
      countLeftRead(){
        return parseInt(readStore.leftReadCount)
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

<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}


</style>
