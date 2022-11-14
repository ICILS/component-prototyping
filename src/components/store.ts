// store.ts
import { reactive } from 'vue'

export const store = reactive({
  isPlaying: false,
  speed: 1,

  toggleButton() {
    this.isPlaying = !this.isPlaying
  },

  play() {
    this.$refs.customControl.play()
  },

  // increment() {
  //   if (this.speed < 2) {
  //     this.speed++
  //     this.$refs.customControl.setSpeed(store.speed)
  //   }
  // },

  increment() {
    if (this.speed < 2)
      this.speed++
  },

  // decrement() {
  //   if (this.speed > 0) {
  //     this.speed--
  //     this.$refs.customControl.setSpeed(store.speed)
  //   }
  // },

  decrement() {
    if (this.speed > 0)
      this.speed--
  },
})

