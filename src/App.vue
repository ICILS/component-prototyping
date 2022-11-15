<script setup lang="ts">
import SpeedSliderDemo from './components/SpeedSliderDemo.vue'
import RunResetButtonDemo from './components/RunResetButtonDemo.vue'
import RunLottieDemo from './components/RunLottieDemo.vue'
// import SliderRGB from './components/SliderRGB.vue'
</script>

<template>
  <v-app>
    <v-main>
      <div class="d-flex align-center flex-column my-3">
        <!-- Demo card slot -->
        <RunResetButtonDemo width="100%" />
      </div>
      <div class="d-flex align-center flex-column my-3">
        <!-- Demo card slot -->
        <SpeedSliderDemo width="100%" />
      </div>
      <div class="d-flex align-center flex-column my-3">
        <!-- Demo card slot -->
        <RunLottieDemo width="100%" />
      </div>
    </v-main>
  </v-app>
</template>
