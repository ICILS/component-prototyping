<template>
  <v-slider
    v-model="tick"
    color="orange"
    :max="2"
    step="1"
    showTicks="always"
    tickSize="3"
    @click:prepend="decrementf()"
    @click:append="incrementf()"
    @change="changeSpeedf()"
    :ticks="tickLabels"
  >
    <template v-slot:prepend>
      <v-btn
      size="small"
      variant="text"
      icon="mdi-minus"
      color="orange"
      @click="decrementf()"
      >
    </v-btn>
    </template>

    <template v-slot:append>
      <v-btn
      size="small"
      variant="text"
      icon="mdi-plus"
      color="orange"
      @click="incrementf()"
      >
    </v-btn>
    </template>
  </v-slider>
</template>


<script setup lang="ts">

import { ref, watch } from 'vue';

const props = defineProps(['tick'])
const emit = defineEmits(['change'])

const tick = ref(props.tick)

const tickLabels = {
  0: '🐢 Slowest',
  1: '',
  2: 'Fastest 🚀',
}

function incrementf() {
  if (tick.value < 2) {
    tick.value++
  }
}

const increment = () => {
  if (tick.value < 2) {
    tick.value++
  }
}

function decrementf() {
  if (tick.value > 0) {
    tick.value--
  }
}

const decrement = () => {
  if (tick.value > 0) {
    tick.value--
  }
}

function changeSpeedf() {
  console.log('Speed changed to ' + tick.value)
}


const changeSpeed = () => {
  console.log('Speed changed to ' + tick.value)
}


watch(tick, (newVal, oldVal) => {
  console.log('Speed changed to ' + newVal)

  // emit the new value to the parent component
  emit('change', newVal)

})


</script>

<style scoped>

</style>

<!-- <script setup lang="ts">
import { ref, defineComponent } from 'vue'

const tick = ref(1)
const tickLabels = {
  0: '🐢 Slowest',
  1: '',
  2: 'Fastest 🚀',
}
const props = defineProps(['tick'])
const emit = defineEmits(['change', 'increment', 'decrement'])

const SpeedSlider = defineComponent({
  props: {
    tick: {
      type: Number,
      default: 1,
    },
  },
  emits: ['change', 'increment', 'decrement'],
})

function decrement () {

  if (tick.value > 0) {
    tick.value--
    emit('decrement')
  }
}

function increment () {
  if (tick.value < 2) {
    tick.value++
    emit('increment', tick.value)
  }
}

function changeSpeed () {
  emit('change', tick.value)
}
</script> -->
