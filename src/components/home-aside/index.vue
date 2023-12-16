<script setup lang="ts">
import {Document, Location, Setting,User} from "@element-plus/icons-vue";
import {ref} from "vue";

const isCollapse = ref(false)


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 路径跳转
const toNav = (val: string) => {
  console.log(val)
}

</script>

<template>
  <el-aside :width="isCollapse ? '64px' : '200px'" class="center-aside">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu
        style="border-right: none"
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#282c36"
        active-text-color="#f8f8f8"
        text-color="#73767b"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="/user" >
          <el-icon><User/></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document/>
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style scoped lang="scss">
.center-aside {
  transition: width 0.3s ease;
  background-color: #282c36;
  overflow: hidden;
}
</style>
