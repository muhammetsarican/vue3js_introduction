<template>
  <router-link to="/">Home</router-link>  
  <router-link to="/newbookmark">New Bookmark</router-link>  
  <div class="container p-3">
    <h3 class="text-center">Bookmark List</h3>
    <div class="row">
      <div class="col-6 offset-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
