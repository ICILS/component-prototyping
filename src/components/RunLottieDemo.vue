<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import RunResetButton from '../components/RunResetButton.vue'
import SpeedSlider from '../components/SpeedSlider.vue'
import PongJSON from '../assets/lotties/pong.json'
// import UntitledJSON from '../assets/lotties/Untitled-186.json'
import { store } from './store'
import 'vue3-lottie/dist/style.css'

const name = 'Run Lottie Demo'

function play() {
  $refs.customControl.play()
}

function pause() {
  $refs.customControl.pause()
}

function stop() {
  $refs.customControl.stop()
}
</script>

<template>
  <v-card max-width="400" min-width="360" class="mx-auto">
    <v-toolbar flat dense>
      <v-card-title>
        {{ name }}
      </v-card-title>
      <!-- <v-card-subtitle>This is a subtitle</v-card-subtitle> -->
      <v-spacer />
      <v-progress-circular v-if="store.isPlaying" class="mr-3" :indeterminate="store.isPlaying" color="amber" />
    </v-toolbar>
    <!-- A slot to display a centered componet  -->
    <v-card-item class="pa-0 ">
      <v-container class="pa-0">
        <v-row class="justify-center mb-5">
          <v-responsive
            :aspect-ratio="1"
            class="pa-0 bgLottie"
            background-color="#F5BB5A"
            color="#F5BB5A"
          >
            <Vue3Lottie
              ref="customControl"
              class=""
              :auto-play="false"
              :speed="store.speed"
              :animation-data="PongJSON"
              width="100%"
              height="100%"
              :pause-animation="!store.isPlaying"
            />
          </v-responsive>
        </v-row>
        <v-row class="justify-center mb-2">
          <SpeedSlider v-model="store.speed" :name="name" />
        </v-row>
      </v-container>
    </v-card-item>
    <v-card-actions>
      <v-card-text> Running? {{ store.isPlaying }} </v-card-text>
      <v-spacer />
      <RunResetButton @click="store.isPlaying ? stop() : play()" />
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
.bgLottie {
  background-color: #F5BB5A;
}
</style>
