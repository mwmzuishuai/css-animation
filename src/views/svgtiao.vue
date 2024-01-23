<template>
    <div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-select v-model="scope.row.xia" class="m-2" placeholder="Select" size="large" style="width: 240px">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom', 
        address: 'No. 189, Grove St, Los Angeles',
        xia:'Option1'
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        xia:'Option1'
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        xia:'Option1'  
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        xia:'Option1'
    },
]
const value = ref([{
    name: 'Option1',
    value: 'Option1'
}])
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
</script>
<style scoped lang="scss"></style>