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
  background-color: rgb(75, 190, 180);
}
.router-link-exact-active,
a:hover {
  background: linear-gradient(315deg, #fca61f 0%, #4506ff 100%);
  color: rgb(0, 0, 0);
}
a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  padding: 10px 20px;
  margin: 5px;
  font-size: 15px;
  font-weight: 700;
  transition: 0.5s;
  border-radius: 20px;
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
