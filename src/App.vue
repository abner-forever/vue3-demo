<template>
  <div class="view">
    <div class="nav">
      <router-link to="/"> Home</router-link>
      <router-link to="/mine"> MIne</router-link>
    </div>
  </div>
  <div id="content">
    <router-view />
  </div>
</template>