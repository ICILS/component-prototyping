<template>
  <Vue3Lottie
    animationLink="https://assets8.lottiefiles.com/packages/lf20_laMcIQgKkZ.json"
    :height="200"
    :width="200"
  />
</template>

<script>
import Vue3Lottie from 'vue3-lottie'

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      DogJSON,
    }
  },
}

// Component props

animationData: {
  type: Object as PropType<LottieProps['animationData']>,
  default: () => ({}),
},
animationLink: {
  type: String as PropType<LottieProps['animationLink']>,
  default: '',
},
loop: {
  type: [Boolean, Number] as PropType<LottieProps['loop']>,
  default: true,
},
autoPlay: {
  type: Boolean as PropType<LottieProps['autoPlay']>,
  default: true,
},
width: {
  type: [Number, String] as PropType<LottieProps['width']>,
  default: '100%',
},
height: {
  type: [Number, String] as PropType<LottieProps['height']>,
  default: '100%',
},
speed: {
  type: Number as PropType<LottieProps['speed']>,
  default: 1,
},
delay: {
  type: Number as PropType<LottieProps['delay']>,
  default: 0,
},
direction: {
  type: String as PropType<LottieProps['direction']>,
  default: 'forward',
},
pauseOnHover: {
  type: Boolean as PropType<LottieProps['pauseOnHover']>,
  default: false,
},
playOnHover: {
  type: Boolean as PropType<LottieProps['playOnHover']>,
  default: false,
},
backgroundColor: {
  type: String as PropType<LottieProps['backgroundColor']>,
  default: 'transparent',
},
pauseAnimation: {
  type: Boolean as PropType<LottieProps['pauseAnimation']>,
  default: false,
},

// API methods

// play
this.$refs.lottieContainer.play()

// pause
this.$refs.lottieContainer.pause()

// stop
this.$refs.lottieContainer.stop()

// destroy
this.$refs.lottieContainer.destroy()

// set speed
this.$refs.lottieContainer.setSpeed(2)

// 'forward' or 'reverse'
this.$refs.lottieContainer.setDirection('forward')

// get duration
this.$refs.lottieContainer.getDuration(true)

// go to a specific frame
this.$refs.lottieContainer.goToAndStop(10, true)
this.$refs.lottieContainer.goToAndPlay(5, true)

// play segments
this.$refs.lottieContainer.playSegments([10, 20], true)

// set sub frame
this.$refs.lottieContainer.setSubFrame(true)

// Events

// @onComplete
// @onLoopComplete
// @onEnterFrame
// @onSegmentStart
</script>
