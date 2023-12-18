<script setup lang="ts">
import { ref, Ref } from "vue"
import { getAllUser, delectUser, setStatus } from "@/api/index"
import { UserControls, UserData } from "@/types"
import { formattedDate } from "@/utils/index"
import { ElMessage } from "element-plus"
import addUserDialog from './comp/dialog.vue'

const useData: Ref<UserData[]> = ref([])

const userInfo: Ref<UserControls> = ref({
  userName: "",
});

const isAdmin = true

const dialogRef = ref()

const getInfo = async () => {
  const res = await getAllUser<UserData[]>();
  useData.value = res.data;
}
getInfo()

// 修改状态
const changStatus = (row: UserData) => {
  setStatus({
    id: row.id,
    status: row.status
  }).then((_res) => {
    ElMessage.success("修改成功")
  })
}

// 删除用户需要二级确认
const isDelete = (row: UserData) => {
  delectUser(row.id).then((_res) => {
    ElMessage.success("删除成功")
  })
}

// 添加用户
const addUser = ()=>{
  dialogRef.value.setTitle('新增用户')
}
</script>

<template>
  <div class="user-box">
    <div class="controls">
      <div class="left">
        <el-input v-model="userInfo.userName" placeholder="用户名" />
      </div>
      <div class="right">
        <el-button type="primary" v-if="isAdmin" @click="addUser">添加用户</el-button>
      </div>
    </div>
    <el-table :data="useData" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="userName" label="用户名" width="200" />
      <el-table-column label="创建时间" width="300">
        <template #default="scope">
          {{ formattedDate(scope.row.createTime) }}
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="200">
        <template #default="scope">
          <el-switch v-model="scope.row.status" @change="changStatus(scope.row)" class="ml-2" style="
              --el-switch-on-color: #13ce66;
              --el-switch-off-color: #ff4949;
            " />
        </template>
      </el-table-column>
      <el-table-column prop="isAdmin" label="是否管理员" width="200" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-popconfirm title="确认删除用户嘛?" :hide-icon="true" @confirm="isDelete(scope.row)">
            <template #reference>
              <el-button type="danger" size="small">删除</el-button>
              <el-button type="danger" size="small" v-if="scope.row.isAdmin">编辑</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <addUserDialog ref="dialogRef"></addUserDialog>
  </div>
</template>

<style scoped lang="scss">
.user-box {
  height: 100%;
  width: 100%;

  .controls {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
