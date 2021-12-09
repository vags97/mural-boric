<template>
  <div>
    <script v-html="jsonLd()" type="application/ld+json"></script>
    <ShareDialog
        v-if="comparteDialog"
        :title="material.title"
        :route="material.route"
        v-model="comparteDialog"
    />
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-row>
          <v-col>
            <v-card>
              <v-img
                :src="material.image"
                class="material-image white--text align-end"
                :alt="'image' + material.title.toLowerCase().replace(' ', '_')"
              >
              </v-img>
              <v-card-title>
                {{ material.title }}
              </v-card-title>
              <v-card-text>
                <Content/>
              </v-card-text>
              <v-card-actions>
                <v-row class="px-1">
                  <v-col class="px-0" cols="6">
                    <v-btn
                        small
                        color="primary"
                        @click="comparteDialog=true"
                        block
                        class="rounded-0"
                        elevation="0"
                    >
                      <v-icon
                          left
                          small
                      >
                        {{mdiShareVariant }}
                      </v-icon>
                      Comparte
                    </v-btn>
                  </v-col>
                  <v-col class="px-0" cols="6">
                    <v-btn
                        small
                        color="#0e8974"
                        :href="material.image"
                        download
                        block
                        class="rounded-0 white--text"
                        elevation="0"
                    >
                      <v-icon
                          left
                          small
                      >
                        {{mdiDownload}}
                      </v-icon>
                      Descarga
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
              <v-card-text>
                ¿Quieres enviar material? Escríbenos a <a :href="`mailto:${email}`">{{ email }}</a>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mdiShareVariant, mdiDownload } from '@mdi/js'
import ShareDialog from "./ShareDialog";
export default {
  name: 'Material',
  components: {ShareDialog},
  data(){
    return {
      mdiShareVariant,
      mdiDownload,
      comparteDialog: false
    }
  },
  computed:{
    material(){
      return this.$page.frontmatter;
    },
    email(){
      return this.$themeConfig.email
    }
  },
  methods: {
    jsonLd(){
      const jsonLd = this.$site.themeConfig.jsonLd;
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        "id": "material-campanna",
        "name": this.material.title,
        "image": this.$site.themeConfig.domain + this.material.image,
        "worksFor": [
          jsonLd.chile,
          jsonLd.aprueboDignidad
        ]
      }
    }
  }
}
</script>

<style lang="stylus">

.material-image
  aspect-ratio 16/9
  width 100%
  max-height 100%
  .content-text
    background-color rgba(0,0,0,0.5)

</style>
