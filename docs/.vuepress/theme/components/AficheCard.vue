<template>
<v-card>
  <v-img
    :src="imageUrl"
    class="align-end"
  >
    <v-row justify="end">
      <v-col cols="auto">
        <v-btn
            small
            color="primary"
            :href="imageUrl"
            download
        >
          <v-icon
              left
              small
          >
            {{mdiDownload}}
          </v-icon>
          Descargar
        </v-btn>
      </v-col>
    </v-row>
  </v-img>
</v-card>
</template>

<script>
import {
  mdiDownload,
} from '@mdi/js';

export default {
  name: "AficheCard",
  props:{
    imageName:{
      type: String,
      default: null
    }
  },
  data(){
    return {
      mdiDownload
    }
  },
  computed:{
    imageUrl(){
      return '/media/afiches/'+this.imageName
    }
  }
}
</script>

<style scoped>

</style>
