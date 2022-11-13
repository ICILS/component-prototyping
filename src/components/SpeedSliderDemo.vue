<template>
  <v-card max-width="400">
    <v-toolbar flat dense>
      <v-toolbar-title>
        <span class="text-subheading">{{ name }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-container>
      <v-responsive>
        <v-row class="justify-center">
          <SpeedSlider v-model="store.speed" :name="name"  />
        </v-row>

        <v-row class="justify-center py-5">
          <span class="text-h5 font-weight-bold"> Speed B: {{ store.speed + 1 }} </span>
        </v-row>
      </v-responsive>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SpeedSlider from './SpeedSlider.vue'
import { store } from './store'

const name = 'Speed Slider Demo'
// let speed = $ref(1)
// let speed = store.speed


</script>
