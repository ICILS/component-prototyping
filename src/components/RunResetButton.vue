<script setup lang="ts">
import { store } from './store'
</script>

<template>
  <v-btn min-width="120" flat :color="store.isPlaying ? 'blue' : 'green'" @click="store.toggleButton()">
    <v-icon size="large" :icon="store.isPlaying ? 'mdi-restart' : 'mdi-play'" />
    <span v-if="store.isPlaying" class="text-button"> Reset </span>
    <span v-else class="text-button"> Run </span>
  </v-btn>
</template>
