<template>
  <v-card>
    <v-img
        :src="image"
        height="200px"
        :alt="'image' + title.toLowerCase().replace(' ', '_')"
    />
    <v-card-title class="py-1">
      <a :href="route" class="candidato-title">
        {{ title }}
      </a>
    </v-card-title>
    <v-card-text>
      <p class="mb-0">
        {{ description }}
      </p>
      <a :href="route">
        Ver
      </a>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CandidatoCard",
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    route: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
  },
  methods: {
    colorChip(tipoCandidatura){
      switch(tipoCandidatura){
        case 1:
          return "primary"
        case 2:
          return "secondary"
        case 3:
          return "yellow"
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.candidato-title
  text-decoration none


</style>
