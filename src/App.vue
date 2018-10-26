<template>
  <div id="app">
    <nav-main></nav-main>
    <!--<images src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
    return {
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false
      this.$nextTick(function () {
        this.isRouterAlive=true
      })
    }
  }

}
</script>

<style>
#app {

}
</style>
