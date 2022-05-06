<template>
  <div id="app" class="theme-dark">
    <TopBar/>
    <FooterBar/>
    <div>

    </div>
  </div>
</template>

<script>
import TopBar from './layouts/TopBar'
import FooterBar from './layouts/FooterBar'
export default {
  name: 'App',
  components: {
    TopBar,
    FooterBar
  }
}
</script>

<style>



</style>
