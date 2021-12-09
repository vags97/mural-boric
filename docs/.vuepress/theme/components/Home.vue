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
        <v-col>
          <v-tabs
              v-model="tab"
              centered
          >
            <v-tab href="#tab-afiches">Afiches</v-tab>
            <v-tab href="#tab-otros">Otros</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item value="tab-afiches">
              <v-row class="pa-2">
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                    v-for="(afiche, index) in afiches"
                    :key="index"
                >
                  <AficheCard
                      :image-name="afiche"
                  />
                </v-col>
              </v-row>
            </v-tab-item>
            <v-tab-item value="tab-otros">
              <v-row class="pa-2">
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
                      :description="material.description"
                      :image="material.image"
                      :route="material.route"
                  />
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import mdToHtml from "../util/mdToHtml";
import MaterialCard from "./MaterialCard";
import AficheCard from "./AficheCard";

export default {
  name: 'Home',
  components: {
    AficheCard,
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
