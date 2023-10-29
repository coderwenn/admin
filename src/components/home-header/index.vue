<script setup lang="ts">

import { CirclePlusFilled, Plus } from "@element-plus/icons-vue";
</script>

<template>
  <el-header class="header-box">
    <!--            预留位置-->
    <div></div>
    <!--            用户操作-->
    <div>
      <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-avatar> user</el-avatar>
              </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="Plus">退出登陆</el-dropdown-item>
            <el-dropdown-item :icon="CirclePlusFilled">
              修改密码
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<style scoped lang="scss">
.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
