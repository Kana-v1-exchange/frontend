<template>
  <DashboardScreen />
</template>

<script>
import DashboardScreen from './components/DashboardScreen.vue'

export default {
  name: 'App',
  components: {
    DashboardScreen
  }
}
</script>

<style>
html body {
  height: 100vh;
  padding: 0;
  margin: 0;
  color: white;
}

#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
