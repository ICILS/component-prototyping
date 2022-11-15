<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import RunResetButton from '../components/RunResetButton.vue'
import SpeedSlider from '../components/SpeedSlider.vue'
import PongJSON from '../assets/lotties/pong.json'
import { store } from './store'
import 'vue3-lottie/dist/style.css'

const name = 'Run Lottie Demo'
</script>

<template>
  <v-card max-width="400" min-width="360">
    <v-toolbar flat dense>
      <v-toolbar-title>
        <span class="text-subheading">{{ name }}</span>
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>

    <v-container class="bg-surface-variant">
      <v-responsive>
        <Vue3Lottie
          ref="customControl"
          :auto-play="false"
          :speed="store.speed"
          :animation-data="PongJSON"
          width="100%"
          height="100%"
        />
      </v-responsive>
    </v-container>

    <v-card-text>
      <!-- Use the speed slider component to control the speed prop of the lottie component using the store -->
      <SpeedSlider v-model="store.speed" :name="name" />
    </v-card-text>

    <v-card-actions>
      <RunResetButton />
    </v-card-actions>
  </v-card>
</template>
