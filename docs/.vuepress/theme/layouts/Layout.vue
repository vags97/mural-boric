<template>
  <div>
    <script v-html="jsonLd()" type="application/ld+json"></script>
    <v-app>
      <Navbar/>
      <v-main>
        <v-container class="py-6" fluid>
          <Home v-if="$page.frontmatter.home" />
          <Material v-else-if="$page.frontmatter.materiales" />
        </v-container>
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Footer from "../components/Footer";
import Material from "../components/Material";


export default {
  name: 'Layout',
  components: {
    Home,
    Navbar,
    Footer,
    Material
  },
  created() {
    if (typeof this.$ssrContext !== 'undefined') {
      this.$ssrContext.userHeadTags+=`<link rel='canonical' href='${this.$site.themeConfig.domain}${this.$page.path}'/>`;
    }
  },
  methods: {
    jsonLd(){
      const jsonLd = this.$site.themeConfig.jsonLd;
      return {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "id": "muralBoricWebsite",
        "name": "Mural de Boric",
        "url": this.$themeConfig.domain,
        "countryOfOrigin": "Chile",
        '@graph': [
          jsonLd.aprueboDignidad,
          {
            ...jsonLd.boric,
            "worksFor": [
              jsonLd.chile,
              jsonLd.aprueboDignidad,
              jsonLd.frenteAmplio
            ]
          }
        ]
      }
    }
  }
}
</script>
