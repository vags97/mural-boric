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
              v-for="(material, index) in materiales"
              :key="index"
          >
            <MaterialCard
                :title="material.title"
                :image="material.image"
                :route="material.route"
            />
          </v-col>\
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
    afiches () {
      return this.$site.themeConfig.afiches;
    },
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>
