<template>
  <div id="app">
    <div id="nav" class="row">
      <div class="col-3">
        <img src="http://noobist.com/wp-content/uploads/2015/07/Fallout-4-Vault-Boy.png" />
      </div>
      <div class="col-6 mt-5">
        <h1>Nerd's-R-Us</h1>
        <router-link to="/">Games</router-link>|
        <router-link to="/about">About</router-link>
      </div>
      <div class="col-3">
        <img
          src="http://3.bp.blogspot.com/-ldIVDihDY4Y/UtH5IeSbrsI/AAAAAAAAAYo/L85vIF3cDQA/s1600/Mario_transparent.png"
        />
      </div>
    </div>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #4475af;
}

#nav a.router-link-exact-active {
  color: #d0000f;
}
img {
  height: 200px;
}
</style>
