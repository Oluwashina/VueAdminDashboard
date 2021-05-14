<template>
  <v-app id="app">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  color: #2c3e50;
}
html{
  scroll-behavior: smooth;
}
.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none;
}
</style>
