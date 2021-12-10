<template>
  <v-row justify="center">
    <v-col cols="12" md="10">
      <v-row>
        <v-col
            cols="12"
            v-if="data.body"
        >
          <Content  />
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="index in this.currentBreakpontCols"
            :key="index"
        >
          <v-row>
            <v-col cols="12">
            <MaterialCard
                v-for="indexMaterial in materiales.length"
                v-if="(indexMaterial-1)%currentBreakpontCols===index-1"
                :key="indexMaterial-1"
                :title="materiales[indexMaterial-1].title"
                :image="materiales[indexMaterial-1].image"
                :route="materiales[indexMaterial-1].route"
                class="pa-2"
            />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import mdToHtml from "../util/mdToHtml";
import MaterialCard from "./MaterialCard";

export default {
  name: 'Home',
  components: {
    NavLink,
    MaterialCard,
  },
  data() {
    return {
      mdToHtml,
      tab: null
    }
  },
  computed: {
    currentBreakpoint() {
      return this.$vuetify.breakpoint.name;
    },
    materiales () {
      return this.$site.themeConfig.materiales;
    },
    currentBreakpontCols(){
      switch (this.currentBreakpoint){
        case 'xl':
          return 4
        case 'lg':
          return 4
        case 'md':
          return 3
        case 'sm':
          return 2
        case 'xs':
          return 1
        default:
          return 1
      }
    },
    materialesCols(){
      const materialesCols = []
      for (let i = 0; i < this.currentBreakpontCols; i++){
       materialesCols[i]=[];
      }
      for(let i = 0; i < this.materiales.length; i++){
        materialesCols[i%this.currentBreakpontCols].push(i)
      }
      return materialesCols
    },
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>
