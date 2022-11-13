<template>
  <v-container>
    <v-responsive>
      <v-row class="justify-center py-5">
        <v-slider v-model="store.speed" color="orange" :max="2" :step="1" showTicks="always" tickSize="3" :ticks="tickLabels">
          <template v-slot:prepend>
            <v-btn size="small" variant="text" icon="mdi-minus" color="orange" @click="store.decrement()"></v-btn>
          </template>

          <template v-slot:append>
            <v-btn size="small" variant="text" icon="mdi-plus" color="orange" @click="store.increment()"> </v-btn>
          </template>
        </v-slider>
      </v-row>
      
      <v-row class="justify-center py-5">
        <span class="text-h5 font-weight-bold"> Speed A: {{ store.speed + 1 }} </span>
      </v-row>      
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { store } from './store'

// Name passed in from the parent component or defaults to 'SpeedSlider'
// interface Props {
//   name?: string
//   speed?: number
// }

// const props = withDefaults(defineProps<Props>(), {
//   name: 'Speed Slider Component',
//   speed: 1,
// })

// let speed = $ref(props.speed)

// let speed = store.speed

const tickLabels = {
  0: '1x 🐢',
  1: '',
  2: ' 🚀 3x',
}

// function increment() {
//   if (store.speed < 2) {    
//     store.speed++
//     this.$refs['customControl'].setSpeed(store.speed)
//   }
//   // console.log('Decrease to ' + speed.value)
//   // emit('update', speed.value)
// }

// function decrement() {
//   if (store.speed > 0) {
//     store.speed--
//     this.$refs['customControl'].setSpeed(store.speed)
//   }
//   // console.log('Increase to ' + speed.value)
//   // emit('update', speed.value)
// }

// const emit = defineEmits<{
//   (event: 'update', speed: number): void
// }>()

// watch(store.speed, newSpeed => {
//   console.log('Speed changed to ' + newSpeed)
//   // emit the new value to the parent component
//   emit('update', newSpeed)
// })
// </script>

// <script lang="ts">
// export default {
//   created() {
//     console.log(this.$attrs)
//   },
// }
// </script>

<style scoped></style>
