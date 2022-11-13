 <!-- Here is the explanation for the code:
      1. We declare the component with the name "RunProgramButton" and give it a template.
      2. In the template, we use the "isPlaying" variable to determine which text to display.
      3. We also use the "isPlaying" variable to determine which function to call when the button is clicked. -->
<template>
  <v-card max-width="400" style="margin: auto">
    <v-toolbar flat dense>
      <v-toolbar-title>
        <span class="text-subheading">RUN BUTTON</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card-text>
      <v-col>
        <v-row class="justify-center">
          <RunResetButton :isPlaying="isPlaying" @toggle="toggleButton()" />
        </v-row>
      </v-col>
    </v-card-text>
  </v-card>
</template>



<script lang="ts">
export default {
  data() {
    return {
      isPlaying: false,
    }
  },
  methods: {
    toggleButton() {
      this.isPlaying = !this.isPlaying
    },
  },
}
</script>

<script setup lang="ts">
import RunResetButton from './RunResetButton.vue'

</script>
