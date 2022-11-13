<template>
  <div>
    <div>
      <Vue3Lottie
        ref="customControl"
        :animationData="PongJSON"
        :height="200"
        :width="200"
        :speed="speed"
      />
      <div>
        <div>
          <button @click="play">Play</button>
          <button @click="pause">Pause</button>
          <button @click="stop">Stop</button>
        </div>
        <div>
          <button @click="toggleDirection">Reverse</button>
          <button @click="getFrameCount"># of frames</button>
          <button @click="getTimeCount"># of seconds</button>
        </div>
        <div>
          <button @click="increaseSpeed">Increase Speed</button>
          <button @click="decreaseSpeed">Decrease Speed</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import PongJSON from '../assets/lotties/pong.json'
import 'vue3-lottie/dist/style.css'

export default {
  name: 'CustomControlsExample',
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      PongJSON,
      count: 0,
      direction: 'forward',
      speed: 1
    }
  },
  methods: {
    play() {
      this.$refs['customControl'].play()
    },
    pause() {
      this.$refs['customControl'].pause()
    },
    stop() {
      this.$refs['customControl'].stop()
    },
    toggleDirection() {
      if (this.direction === 'forward') {
        this.pause()
        this.$refs['customControl'].setDirection('reverse')
        this.play()
        this.direction = 'reverse'
      } else {
        this.pause()
        this.$refs['customControl'].setDirection('forward')
        this.play()
        this.direction = 'forward'
      }
    },
    getFrameCount() {
      alert(
        `This animation has ${this.$refs['customControl'].getDuration(
          true,
        )} frames`,
      )
    },
    getTimeCount() {
      alert(
        `This animation takes ${this.$refs['customControl'].getDuration(
          false,
        )} seconds`,
      )
    },
    increaseSpeed() {
      this.speed += 0.5
      this.$refs['customControl'].setSpeed(this.speed)
    },
    decreaseSpeed() {
      this.speed -= 0.5
      this.$refs['customControl'].setSpeed(this.speed)
    },
  },
}
</script>
