<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

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
