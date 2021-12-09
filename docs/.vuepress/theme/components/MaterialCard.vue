<template>
  <v-card>
    <ShareDialog
        v-if="comparteDialog"
        :title="title"
        :route="route"
        v-model="comparteDialog"
    />
    <v-img
        :src="image"
        :alt="'image' + title.toLowerCase().replace(' ', '_')"
        class="align-end"
    >
      <v-row>
        <v-col cols="6" class="pr-0">
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
        <v-col cols="6"  class="pl-0">
          <v-btn
              small
              color="#0e8974"
              :href="image"
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
    </v-img>
  </v-card>
</template>

<script>
import {mdiShareVariant, mdiDownload } from '@mdi/js'
import ShareDialog from "./ShareDialog";

export default {
  name: "CandidatoCard",
  components: {ShareDialog},
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    route: {
      type: String,
      default: ''
    },
  },
  data(){
    return {
      mdiShareVariant,
      mdiDownload,
      comparteDialog: false
    }
  },
}
</script>

<style lang="stylus" scoped>

.candidato-title
  text-decoration none


</style>
