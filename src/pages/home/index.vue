<script setup lang="ts">
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<template>
  <div class="home-box">
    <div class="common-layout">
      <el-container class="home-box-center">
        <el-aside :width="isCollapse ?'64px' : '200px'" class="center-aside">
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
            <el-menu-item index="2">
              <el-icon>
                <icon-menu/>
              </el-icon>
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
        <el-container>
          <el-header class="header-box">
            <div></div>
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
          <el-main>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="Date" width="180"/>
              <el-table-column prop="name" label="Name" width="180"/>
              <el-table-column prop="address" label="Address"/>
            </el-table>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-box {
  width: 100vw;
  height: 100vh;
  .center-aside{
    transition: width 0.3s ease;
    background-color: #282c36;
  }

  .home-box-center {
    height: 100%
  }
}

.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.common-layout {
  height: 100%;
}
</style>
