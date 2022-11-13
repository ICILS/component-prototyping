// store.ts
import { reactive } from 'vue'

export const store = reactive({
  speed: 1,

  increment() {
    if (this.speed < 2) {
      this.speed++
      this.$refs['customControl'].setSpeed(store.speed)
    }
  },

  decrement() {
    if (this.speed > 0) {
      this.speed--
      this.$refs['customControl'].setSpeed(store.speed)
    }
  },
})
