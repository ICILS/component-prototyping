<script setup lang="ts">
import { store } from './store'

const tickLabels = {
  0: '1x 🐢',
  1: '',
  2: ' 🚀 3x',
}
</script>

<template>
  <v-responsive>
    <v-slider
      id="speed-slider"
      v-model="store.speed"
      class="my-1"
      color="orange"
      :max="2"
      :step="1"
      show-ticks="always"
      tick-size="3"
      :ticks="tickLabels"
      hint="Adjust the speed of the simulation"
      thumb-size="24"
      track-size="8"
      :rounded="true"
      :append-icon="store.isPlaying ? 'mdi-restart' : 'mdi-play'"
    >
      <template #prepend>
        <v-btn size="small" variant="text" icon="mdi-minus" color="orange" @click="store.decrement()" />
      </template>

      <template #append>
        <v-btn size="small" variant="text" icon="mdi-plus" color="orange" @click="store.increment()" />
      </template>
    </v-slider>
  </v-responsive>
</template>

<style scoped></style>
