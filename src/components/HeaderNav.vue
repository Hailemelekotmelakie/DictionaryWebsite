<template>
  <div class="navContainer">
    <router-link to="/"> Home </router-link>
    <router-link to="/addads">Add Ads</router-link>
    <router-link to="/Viewads">View Ads</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  inject: ["FIREBASE_URL"],
};
</script>
<style scoped>
.navContainer {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  background-color: rgb(0, 168, 225);
  color: aliceblue;
}
.router-link-active {
  color: aliceblue;
}
a {
  color: aliceblue;
  text-decoration: none;
  padding: 15px;
  font-size: 15px;
  font-weight: 700;
  transition: 1s;
  border-radius: 4px;
}
a:hover,
a:focus {
  color: rgb(0, 0, 0);
  background-color: rgb(83, 207, 248);
}
@media screen and (max-width: 890px) {
  .navContainer {
    gap: 0px;
  }
  a {
    padding: 10px;
    font-size: 12px;
  }
}
</style>
