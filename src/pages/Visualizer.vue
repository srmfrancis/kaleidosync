<template lang="pug">
.visualizer
  Buttons
  transition(name="fadeyn")
    Header(v-if="menuVisible")
  NowPlaying
  transition(name="fade")
    Spinner(v-if="spinnerVisible")
  transition(name="fadey")
    Toast(v-if="toast.visible")
</template>

<script>
import { mapState } from 'vuex'
import MultiViz from '@/util/multi-viz'
import NowPlaying from '@/components/NowPlaying'
import Spinner from '@/components/Spinner'
import Toast from '@/components/Toast'
import Buttons from '@/components/Buttons'
import Header from '@/components/Header'

import enums from '@/enums'
import {
  SET_SPINNER_VISIBLE,
  SET_TOAST_VISIBLE,
  SET_CURRENTLY_PLAYING,
  SET_HIDE_ALL
} from '@/vuex/mutation-types'

export default {
  name: 'visualizer',
  components: {
    NowPlaying,
    Spinner,
    Toast,
    Buttons,
    Header
  },
  computed: {
    ...mapState(['menuVisible', 'spinnerVisible', 'toast', 'selectedVisualizer'])
  },
  watch: {
    selectedVisualizer (val) {
      this.configSelectedVisualizer(val)
    }
  },
  methods: {
    mousemove () {
      this.$store.dispatch('hover')
    },
    watchers () {
      this.multiviz.sync.state.watch('loadingNextSong', val => {
        this.$store.commit(SET_SPINNER_VISIBLE, val)
        this.$store.commit(SET_TOAST_VISIBLE, false)
      })

      this.multiviz.sync.state.watch('currentlyPlaying', val => {
        this.$store.commit(SET_CURRENTLY_PLAYING, val)
      }) 

      this.multiviz.sync.state.watch('noPlayback', val => {
        if (val === true) {
          this.$store.commit(SET_HIDE_ALL, true)
          this.$store.dispatch('toast', {
            message: 'No playback detected',
            autoHide: false
          })  
          this.$store.commit(SET_HIDE_ALL, false)
        } else {
          this.$store.commit(SET_TOAST_VISIBLE, false)
        }
      })
    },

    configSelectedVisualizer (val) {
      const MAX_PIXELS = 400 * 900
      const isMobile = (window.innerWidth * window.innerHeight) <= MAX_PIXELS

      this.multiviz.selectedVisualizer = val
    
      if (val === 'trails') {
        this.multiviz.sketch.setSize(true)
        this.multiviz.sync.state.volumeSmoothing = 15
        this.multiviz.sync.state.volumeAverage = 200
      }
      
      if (val === 'kaleidosync') {
        this.multiviz.sketch.setSize(isMobile)
        this.multiviz.sync.state.volumeSmoothing = 40
        this.multiviz.sync.state.volumeAverage = 400

      }

      if (val === 'wavesync') {
        this.multiviz.sketch.setSize(isMobile)
        this.multiviz.sync.state.volumeSmoothing = 60
        this.multiviz.sync.state.volumeAverage = 400
      }

      if (val === 'blobs') {
        this.multiviz.sketch.setSize(true)
        this.multiviz.sync.state.volumeSmoothing = 5
        this.multiviz.sync.state.volumeAverage = 400
      }
    }
  },
  mounted () {
    if (document.getElementsByTagName('canvas')[0]) return 

    this.multiviz = new MultiViz(this.selectedVisualizer)

    this.$store.dispatch('toast', {
      message: 'Connecting to Spotify'
    })

    this.configSelectedVisualizer(this.selectedVisualizer)

    window.addEventListener('resize', () => {
      this.configSelectedVisualizer(this.selectedVisualizer)
    })

    this.watchers()

    if (this.$ga) {
      this.$ga.page('/visualizer')

      this.$ga.event({
        eventCategory: 'visualizer',
        eventAction: 'mounted',
        eventLabel: this.selectedVisualizer,
        eventValue: enums[this.selectedVisualizer]
      })
    }
  },
  beforeMount () {
    document.body.addEventListener('mousemove', this.mousemove.bind(this))
    document.body.addEventListener('touchstart', this.mousemove.bind(this))
  },
  beforeDestroy () {
    document.body.removeEventListener('mousemove', this.mousemove.bind(this))
    document.body.removeEventListener('touchstart', this.mousemove.bind(this))
  }
}
</script>

<style lang="scss">     
canvas {
  @include position(fixed, 0 null null 0);
  @include size(100%);
  z-index: 0;
}   
</style> 