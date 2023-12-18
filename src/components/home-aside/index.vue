<script setup lang="ts">
import { Document, Location, Setting, User } from "@element-plus/icons-vue";
import { ref } from "vue";

const isCollapse = ref(false)


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<template>
  <el-aside :width="isCollapse ? '64px' : '200px'" class="center-aside">
    <div class="logo">
      <div class="logo-font" v-if="!isCollapse">coder</div>
    </div>
    <el-menu style="border-right: none" default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse"
      background-color="#282c36" active-text-color="#f8f8f8" text-color="#73767b" @open="handleOpen" @close="handleClose"
      :router="true">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
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
      <el-menu-item index="/user">
        <el-icon>
          <User />
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
    <div class="quest">
      <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false" v-if="isCollapse">展开</el-radio-button>
          <el-radio-button :label="true" v-else>关闭</el-radio-button>
        </el-radio-group>
      </div>
    </div>
  </el-aside>
</template>

<style scoped lang="scss">
.center-aside {
  transition: width 0.3s ease;
  background-color: #282c36;
  overflow: hidden;
  position: relative;

  .quest {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 0;
    width: 100%;
    height: 60px;
  }

  .logo {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-font {
      font-size: 24px;
      color: aliceblue;
    }
  }
}
</style>
