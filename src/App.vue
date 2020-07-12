<template lang="pug">
  div#goodApp
    KeepAlive
      RouterView
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  #goodApp {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    overflow: hidden auto;
  }
</style>
