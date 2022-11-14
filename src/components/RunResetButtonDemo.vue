<script setup lang="ts">
import RunResetButton from './RunResetButton.vue'
import { store } from './store'
const name = 'Run/Reset Toggle Buton Demo'
</script>

<template>
  <v-card max-width="400" width="400" class="mx-auto">
    <v-toolbar flat dense>
      <v-card-title>
        {{ name }}
      </v-card-title>
      <!-- <v-card-subtitle>This is a subtitle</v-card-subtitle> -->
      <v-spacer />
      <v-progress-circular v-if="store.isPlaying" class="mr-3" :indeterminate="store.isPlaying" color="amber" />
    </v-toolbar>
    <!-- A slot to display a centered componet  -->
    <v-card-item>
      <v-container>
        <v-row class="justify-center">
          <RunResetButton />
        </v-row>
      </v-container>
    </v-card-item>
    <!-- <v-card-text> This is content </v-card-text> -->
    <v-card-text> Running? {{ store.isPlaying }} </v-card-text>
  </v-card>
</template>
