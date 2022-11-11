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