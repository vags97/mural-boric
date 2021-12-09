<template>
  <v-dialog
      :value="value"
      @click:outside="$emit('input', false)"
      @change="$emit('input', false)"
      width="500"
  >
    <v-card>
      <v-card-title>
        Comparte
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-btn
                block
                class="rounded-0 white--text"
                target="_blank"
                :href="compartirFacebook"
                elevation="0"
                color="#3b5998"
            >
              <v-icon left>
                {{mdiFacebook}}
              </v-icon>
              Facebook
            </v-btn>
            <v-btn
                class="rounded-0 white--text"
                target="_blank"
                :href="compartirTwitter"
                elevation="0"
                block
                color="#00acee"
            >
              <v-icon left>
                {{mdiTwitter}}
              </v-icon>
              Twitter
            </v-btn>
            <v-btn
                class="rounded-0 white--text"
                target="_blank"
                @click="$emit('input', false)"
                elevation="0"
                block
                color="grey"
            >
              <v-icon left>
                {{mdiClose}}
              </v-icon>
              Cerrar
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mdiFacebook, mdiTwitter, mdiClose } from '@mdi/js'

export default {
  name: "ShareDialog",
  props: {
    title: {
      type: String,
      default: ''
    },
    route: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      mdiFacebook,
      mdiTwitter,
      mdiClose
    }
  },
  computed:{
    compartirTwitter(){
      return 'https://twitter.com/intent/tweet?text='
          + this.title
          + ' '
          + this.$themeConfig.domain
          + this.route
    },
    compartirFacebook(){
      return 'https://www.facebook.com/sharer.php?u='
          + this.$themeConfig.domain
          + this.route
    }
  }
}
</script>

<style scoped>

</style>
