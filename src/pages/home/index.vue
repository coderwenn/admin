<script setup lang="ts">
import HomeAside from '../../components/home-aside/index.vue'
// import HomeHeader from '../../components/home-header/index.vue'
import {
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'
import { useRouter } from "vue-router";

const router = useRouter()


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

const userFeature = (val: string) => {
  if (val === '退出登陆') {
    // 关闭页面进入到新的页面
    router.replace({path: '/login'})
  } else {
    console.log(val)
  }
}

</script>

<template>
  <div class="home-box">
    <div class="common-layout">
      <el-container class="home-box-center">
        <!--        导航栏-->
        <HomeAside></HomeAside>
        <el-container>
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
                  <el-dropdown-menu :split-button="true">
                    <el-dropdown-item :icon="Plus" @click="userFeature('退出登陆')">退出登陆</el-dropdown-item>
                    <el-dropdown-item :icon="CirclePlusFilled" @click="userFeature('修改密码')
                    ">
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
