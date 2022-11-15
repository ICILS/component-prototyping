<script setup lang="ts">
import { store } from './store'
</script>

<template>
  <v-btn
    variant="flat"
    class="px-3"
    min-width="105"
    flat
    :color="store.isPlaying ? 'blue' : 'green'"
    rounded="pill"
    @click="store.toggleButton()"
  >
    <template #prepend>
      <v-icon
        transition="slide-y-transition"
        class="mx-0"
        size="x-large"
        :icon="store.isPlaying ? 'mdi-restart' : 'mdi-play'"
      />
    </template>

    <span v-if="store.isPlaying" class="text-button"> Reset </span>
    <span v-else class="text-button">Run</span>
  </v-btn>
</template>

<style lang="scss" scoped>

</style>
