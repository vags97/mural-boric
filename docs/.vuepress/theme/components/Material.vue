<template>
  <div>
    <script v-html="jsonLd()" type="application/ld+json"></script>
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
                <v-row justify="end">
                  <v-col cols="auto">
                  <v-btn
                    x-small
                    color="primary"
                    :href="material.image"
                    download
                  >
                    <v-icon
                      left
                      x-small
                    >
                      {{mdiDownload}}
                    </v-icon>
                    Descargar
                  </v-btn>
                  </v-col>
                </v-row>
              </v-img>
              <v-card-title>
                {{ material.title }}
              </v-card-title>
              <v-card-text>
                <Content/>
              </v-card-text>
              <v-card-actions>
                <v-btn
                    :href="material.files"
                    download
                    color="primary"
                    small
                >
                  <v-icon left>
                    {{mdiDownload}}
                  </v-icon>
                  Descargar Archivo
                </v-btn>
                <v-btn
                    :href="material.file_external"
                    download
                    color="primary"
                    small
                    target="_blank"
                >
                  <v-icon left>
                    {{mdiOpenInNew }}
                  </v-icon>
                  Ir a Página de Descarga
                </v-btn>
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
import {
  mdiDownload,
  mdiOpenInNew
} from '@mdi/js';

export default {
  name: 'Material',
  data(){
    return {
      mdiDownload,
      mdiOpenInNew
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
