<script setup>
</script>

<template>
  <div>
    <nav>
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <!-- <router-link to="/el">El</router-link> -->
          El
          <ul class="menu">
            <li><router-link to="/el/demo">Demo</router-link></li>
            <li><router-link to="/el/button">Button</router-link></li>
            <li><router-link to="/el/table">Table</router-link></li>
          </ul>
        </li>
        <li>
          Antd
          <ul class="menu">
            <li><router-link to="/antd/demo">Demo</router-link></li>
            <li><router-link to="/antd/button">Button</router-link></li>
            <li><router-link to="/antd/table">Table</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
</style>