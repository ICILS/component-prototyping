<template>
  <v-card max-width="400" style="margin: auto">
    <v-toolbar flat dense>
      <v-toolbar-title>
        <span class="text-subheading">SPEED SLIDER</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card-text>
      <SpeedSlider  :tick="sliderTick"   />
      <v-row class="justify-center">
          <span
            class="text-h2 font-weight-light"
            v-text="sliderTick.toString()"
          >
        </span>
        </v-row>
    </v-card-text>
    
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SpeedSlider from '../components/SpeedSlider.vue'

const sliderTick = ref(1)

// How to make v-text work with a ref?
// <span
//             class="text-h2 font-weight-light"
//             v-text="sliderTick"
//           >
//         </span>



</script>
