<template>
  <div class="main-container">
    <h1 class="incompatible-error-msg" v-if="!isROTCompatible">ROT is not supported by your browser.</h1>
  </div>
</template>

<script>

export default {
  name: 'map',
  data () {
    if (this.env === 'development') {
      console.log('ROT:', this.ROT)
    }
    return {
      isROTCompatible: this.ROT.isSupported()
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
