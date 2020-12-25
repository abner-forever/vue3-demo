<template>
  <div class="view">
    <div id="nav">
      <div>
        <b>🚀 [vue3, vuex, router, ts]</b>
        <p>test package</p>
      </div>
      <div>
        <router-link to="/">(🍉 🍉🌽🍌💩 ) => Home</router-link>
      </div>
      <div>
        <router-link to="/mine">(🌽 ) => MIne</router-link>
      </div>
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>