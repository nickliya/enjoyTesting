<template>
    <div class="home" :style="background">
      <!-- <img src="../assets/logo.png" alt="Vue logos"> -->
    </div>
</template>

<script>
export default {
  name: "home",
  data () {
    return {
      background: {
        backgroundImage: 'url(' + require('../assets/background.jpg') + ')',
        backgroundRepeat: "no-repeat",
        // backgroundSize: "100% 100%",
      },
    }
  },
  components: {
  }
}
</script>