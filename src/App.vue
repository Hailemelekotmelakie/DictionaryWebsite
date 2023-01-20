<template>
  <HeaderNave></HeaderNave>
</template>

<script>
import Header from "@/components/HeaderNav.vue";
export default {
  name: "App",
  provide: {
    FIREBASE_URL: process.env.VUE_APP_FIREBASE_URL,
  },
  components: {
    HeaderNave: Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #ecebfe;
  padding: 0;
  margin: 0;
}
::selection {
  color: blue;
  background-color: rgb(182, 181, 181);
}
</style>
