<template>
  <div id="app">
    <rot-map></rot-map>
  </div>
</template>

<script>
import ROTMap from '@/components/MapView'

export default {
  name: 'app',
  components: {
    'rot-map': ROTMap
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
