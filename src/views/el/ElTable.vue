<script setup>
import { reactive } from 'vue'
import { Timer, Delete, DeleteFilled, CaretTop, CaretBottom } from '@element-plus/icons-vue'
import { tableData } from '@/libs/fake_data'

console.log('tableData:', tableData)

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

// interface User {
//   date: string
//   name: string
//   address: string
// }

const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}

const getSummaries = (param) => {
  const { columns, data } = param
  const sums = []
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = '합계'
      return
    }
    const values = data.map((item) => Number(item[column.property]))
    if (!values.every((value) => Number.isNaN(value))) {
      sums[index] = `$ ${(values.reduce((prev, curr) => {
        const value = Number(curr)
        if (!Number.isNaN(value)) {
          return prev + curr
        } else {
          return prev
        }
      }, 0)).toLocaleString()}`
    } else {
      sums[index] = ''
    }
  })

  sums[5] = '42.3 %'

  return sums
}

</script>

<template>
  <div class="container">
    <el-table :data="tableData" style="width: 100%; height: 100%;" border show-summary :summary-method="getSummaries">
      <el-table-column type="selection" width="55" header-align="center" align="center" />
      <el-table-column type="expand">
        <template #default="props">
          <div class="expand-box">
            <el-form size="small" :inline="false" :model="formInline" class="form-inline">
              <el-form-item label="평점">
                <el-input v-model="formInline.user" placeholder="평점" clearable input-style="text-align: right;" />
              </el-form-item>
              <el-form-item label="등급">
                <el-select
                  v-model="formInline.region"
                  placeholder="등급"
                  clearable
                >
                  <el-option label="1등급" value="1등급" />
                  <el-option label="2등급" value="2등급" />
                </el-select>
              </el-form-item>
              <el-form-item label="평가일">
                <el-date-picker
                  v-model="formInline.date"
                  type="date"
                  placeholder="평가일"
                  clearable
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">저장</el-button>
              </el-form-item>
            </el-form>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="날짜" width="140" sortable header-align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center; justify-content: center;">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="이름" sortable header-align="center">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <!-- <div>전화번호: {{ scope.row.phone }}</div>
              <div>주소: {{ scope.row.address }}</div> -->
              <div>전화번호: 010-1234-5678</div>
              <div>주소: 서울시 금천구</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="실적" width="180" header-align="center" align="right" 
        prop="sales" :formatter="(row, column, cellValue, index) => '$ ' + cellValue.toLocaleString()" />
      <el-table-column label="증감률" width="180" header-align="center" align="right">
      <!-- <el-table-column label="증감률" width="180" header-align="center" align="right" 
        prop="rate" :formatter="(row, column, cellValue, index) => cellValue.toLocaleString() + '%'"> -->
        <template #default="scope">
          <div style="display: flex; align-items: center; justify-content: right;">
            <el-icon v-if="scope.row.isUp" color="red"><CaretTop /></el-icon>
            <el-icon v-else color="blue"><CaretBottom /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.rate.toLocaleString() + ' %' }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="수정" width="80" header-align="center" align="center">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">수정</el-button>
        </template>
      </el-table-column>
      <el-table-column label="삭제" width="80" header-align="center" align="center">
        <template #default="scope">
          <!-- <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            ><el-icon><Delete /></el-icon></el-button> -->
          <!-- <el-icon color="red" @click="handleDelete(scope.$index, scope.row)"><Delete /></el-icon> -->
          <el-button type="danger" size="small" text :icon="Delete" @click="handleDelete(scope.$index, scope.row)" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.container {
  height: 70vh;
  margin: 20px;
  padding: 20px;
  border: solid 1px lightgrey;
  border-radius: 10px;
  /* background-color: #e8f3ff; */
}
.expand-box {
  padding: 10px;
  display: flex;

}
.form-inline {
  /* padding: 20px; */
  display: flex;  
  gap: 30px;
  align-items: flex-end;
}
</style>
