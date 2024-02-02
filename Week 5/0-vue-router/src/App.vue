<template>
  <div class="container">
    <router-link class="nav-link" active-class="active" to="/">
      Home
    </router-link>
    <router-link class="nav-link" active-class="active" to="/about">
      About Me
    </router-link>
    <router-view></router-view>
  </div>
</template>
<style>
.nav-link{
  display: inline-block;
  padding: 5px 10px;
  text-decoration: none;
  border: 1px solid #fa6558;
  color: #fa6558;
  margin-right: 5px;
  margin-top: 5px;
}
.active{
  background: #fa6558;
  color: #fff;
}
</style>
