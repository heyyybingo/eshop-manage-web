<template>
  <div class="header">
    <div>
      <a-icon type="user" />
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <span>Admin</span>
          <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  float: right;
  padding: 0 20px;
  line-height: 64px;
  font-size: 16px;
}
</style>
