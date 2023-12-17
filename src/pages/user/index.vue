<script setup lang="ts">
import { ref, Ref } from "vue";
import { getAllUser, delectUser } from "@/api/index";
import { UserControls, UserData } from "@/types";
import { formattedDate } from "@/utils/index";
import { ElMessage } from 'element-plus'


const useData = ref<UserData[]>();

const userInfo: Ref<UserControls> = ref({
  userName: "",
});

const getInfo = async () => {
  const res = await getAllUser<UserData[]>();
  useData.value = res.data;
  useData.value.forEach((it) => {
    console.log(formattedDate(it.createTime));
  });
};
getInfo();

// 修改状态
const changStatus = (row: UserData) => {
  console.log(row);
};
// 删除用户需要二级确认
const isDelete = (row: UserData) => {
  delectUser(row.id).then(_res=>{
    ElMessage.success('删除成功')
  })
};
</script>

<template>
  <div class="user-box">
    <div class="controls">
      <div>
        <el-input v-model="userInfo.userName" placeholder="用户名" />
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
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            @change="changStatus(scope.row)"
            class="ml-2"
            style="
              --el-switch-on-color: #13ce66;
              --el-switch-off-color: #ff4949;
            "
          />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-popconfirm
            title="确认删除用户嘛?"
            :hide-icon="true"
            @confirm="isDelete(scope.row)"
          >
            <template #reference>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
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
  }
}
</style>
