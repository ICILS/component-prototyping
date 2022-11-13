 <!-- Here is the explanation for the code:
      1. We declare the component with the name "RunResetButton" and give it a template.
      2. In the template, we use the "isPlaying" variable to determine which text to display.
      3. We also use the "isPlaying" variable to determine which function to call when the button is clicked. -->
<template>
  <v-card max-width="400" style="margin: auto">
    <v-toolbar flat dense>
      <v-toolbar-title>
        <span class="text-subheading">RUN LOTTIE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-container class="bg-surface-variant">
      <v-responsive height="300px">
        <Vue3Lottie :autoPlay="false" ref="customControl" :speed="animationSpeed"
          :animationData="PongJSON" width="100%" height="100%"  />
      </v-responsive>
    </v-container>

    <v-card-text>
      <v-col class="py-5">
        <v-row class="justify-center py-5">
          <SpeedSlider  :tick="sliderTick"  />
        </v-row>
        <br>
        <v-row class="justify-center">
          <span
            class="text-h2 font-weight-light"
            v-text="sliderTick"
          >
        </span>
        </v-row>
        <v-row class="justify-center py-5">
          <RunResetButton :isPlaying="isPlaying" @click="isPlaying ? stop() : play()" />
        </v-row>
      </v-col>
    </v-card-text>
  </v-card>
</template>


<script lang="ts">
export default {
methods: {
    play() {
      this.$refs.customControl.play()
      this.isPlaying = true
    },
    stop() {
      this.$refs.customControl.stop()
      this.isPlaying = false
    },
  },
};
</script>

<script lang="ts" setup>
import { ref, defineComponent } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import RunResetButton from '../components/RunResetButton.vue'
import SpeedSlider from '../components/SpeedSlider.vue'
import PongJSON from '../src/assets/lotties/pong.json'
import 'vue3-lottie/dist/style.css'

const isPlaying = ref(false)
const sliderTick = ref(1)
const animationSpeed = ref(sliderTick)
</script>

