<script setup lang="ts">
import SpeedSliderDemo from './components/SpeedSliderDemo.vue'
import RunResetButtonDemo from './components/RunResetButtonDemo.vue'
import RunLottieDemo from './components/RunLottieDemo.vue';
// import SliderRGB from './components/SliderRGB.vue'
import LottieExampleVue from './components/LottieExample.vue';
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="mx-auto my-auto">
        <v-row>
          <v-col cols="12" sm="6">
            <RunResetButtonDemo />
            <br />
            <SpeedSliderDemo />
            <br />
            <RunLottieDemo />
          </v-col>
          <!-- <v-col cols="12" sm="6">            
            <SliderRGB />
          </v-col> -->
          <v-col cols="12" sm="6">            
            <LottieExampleVue />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
