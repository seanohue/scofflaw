<template>
  <div class="main-container">
    <h1 class="incompatible-error-msg" v-if="!isROTCompatible">ROT.js is not supported by your browser.</h1>
  </div>
</template>

<script>
import MapTile from '@/lib/MapTile'

export default {
  name: 'rot-map',
  data () {
    if (this.env === 'development') {
      console.log('ROT:', this.ROT)
    }
    return {
      map: {},
      isROTCompatible: this.ROT.isSupported()
    }
  },

  mounted () {
    this.createDisplay()
  },

  methods: {
    createDisplay () {
      this.display = new this.ROT.Display()
      this.$el.appendChild(this.display.getContainer())
      this.buildMap()
    },

    // TODO: Pull into own class & persist using VueX.
    buildMap () {
      const digger = new this.ROT.Map.Digger()
      digger.create((x, y, value) => {
        if (value) return
        // Ugh, gross.
        this.map[x + ',' + y] = new MapTile(x, y, '.')
      })
      this.drawMap()
    },

    drawMap () {
      Object.keys(this.map).forEach(key => {
        const mapTile = this.map[key]
        if (mapTile instanceof MapTile) {
          mapTile.draw(this.display)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
