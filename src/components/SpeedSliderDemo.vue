<script setup lang="ts">
import SpeedSlider from './SpeedSlider.vue'
import { store } from './store'

const name = 'Speed Slider Demo'
</script>

<template>
  <v-card max-width="400" width="400" class="mx-auto">
    <v-toolbar flat dense>
      <v-card-title> {{ name }} </v-card-title>
      <!-- <v-card-subtitle>This is a subtitle</v-card-subtitle> -->
      <v-spacer />
      <v-card-title> {{ store.speed + 1 }} </v-card-title>
    </v-toolbar>
    <!-- A slot to display a centered componet  -->
    <v-card-item>
      <v-container>
        <v-row class="justify-center">
          <SpeedSlider v-model="store.speed" :name="name" />
        </v-row>
      </v-container>
    </v-card-item>
    <v-card-text> Speed: {{ store.speed + 1 }} </v-card-text>
  </v-card>
</template>
