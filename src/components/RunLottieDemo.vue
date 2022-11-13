<!-- Here is the explanation for the code:
      1. We declare the component with the name "RunResetButton" and give it a template.
      2. In the template, we use the "isPlaying" variable to determine which text to display.
      3. We also use the "isPlaying" variable to determine which function to call when the button is clicked. -->
<template>
  <v-card max-width="400">
    <v-toolbar flat dense>
      <v-toolbar-title>
        <span class="text-subheading">RUN LOTTIE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-container class="bg-surface-variant">
      <v-responsive >
        <Vue3Lottie
          :autoPlay="false"
          ref="customControl"
          :speed="store.speed"
          :animationData="PongJSON"
          width="100%"
          height="100%"
        />
      </v-responsive>
    </v-container>

    <v-card-text>
      <!-- Use the speed slider component to control the speed prop of the lottie component using the store -->
      <SpeedSlider :name="name" v-model="store.speed" />
      <!-- <v-row class="justify-center">
      <span class="text-h5 font-weight-bold"> Speed: {{ speed + 2 }} </span>
    </v-row> -->
    </v-card-text>

    <v-card-actions>
      <RunResetButton :isPlaying="isPlaying" @click="isPlaying ? stop() : play()" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
export default {
  components: {
    Vue3Lottie,
  },  
  data() {
    return {
      PongJSON,
      count: 0,
      direction: 'forward',
    }
  },
  methods: {
    play() {
      this.$refs['customControl'].play()
      this.isPlaying = true
    },
    stop() {
      this.$refs['customControl'].stop()
      this.isPlaying = false
    },
  },
  increaseSpeed() {
    store.speed += 1
      this.$refs['customControl'].setSpeed(store.speed)
    },
    decreaseSpeed() {
      store.speed -= 1
      this.$refs['customControl'].setSpeed(store.speed)
    },
}
</script>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { store } from './store'
import { Vue3Lottie } from 'vue3-lottie'
import RunResetButton from '../components/RunResetButton.vue'
import SpeedSlider from '../components/SpeedSlider.vue'
import PongJSON from '../assets/lotties/pong.json'
import 'vue3-lottie/dist/style.css'

let isPlaying = ref(false)
// let speed = ref(1)
const name = 'Speed Slider'

// function play() {
//   this.$refs['customControl'].play()
//   isPlaying.value = true
// }

// function stop() {
//   this.$refs['customControl'].stop()
//   isPlaying.value = false
// }


</script>
