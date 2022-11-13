<!-- Here is the explanation for the code:
1. The component has a prop named isPlaying that is a boolean
2. The component emits an event named toggle when the button is clicked
3. The button has a different color and icon depending on the value of isPlaying
4. The button has a different text depending on the value of isPlaying -->

<template>
  <v-btn flat :color="props.isPlaying ? 'blue' : 'green'" @click="$emit('toggle')">
    <v-icon size="large" :icon="props.isPlaying ? 'mdi-restart' : 'mdi-play'" />
    <span v-if="props.isPlaying" class="text-button"> Reset </span>
    <span v-else class="text-button"> Run </span>
  </v-btn>
</template>

<script setup lang="ts">
// defineProps(['isPlaying'])
// defineEmits(['toggle'])

const $emit = defineEmits<{
  (event: 'toggle'): void
}>()


const props = defineProps<{
  isPlaying: boolean
}>()
</script>
