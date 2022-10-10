<template>
  <div class="body">
    <el-row class="tac">
      <el-col :span="4">
        <!-- default-active="/carbonr1" -->
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#DCDCDC"
          router="true"
        >
          <el-menu-item index="/">
            <el-icon><icon-menu /></el-icon>
            <span @click="onClick()">排放总览</span>
          </el-menu-item>
          <el-sub-menu index="/carbonr1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>排放分析</span>
            </template>
            <el-menu-item index="/carbonr1">对比分析</el-menu-item>
            <el-menu-item index="/carbonr2">排流分析</el-menu-item>
            <el-menu-item index="/carbonr3">排放KPI分析</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><location /></el-icon>
              <span>排放管理</span>
            </template>
            <el-menu-item index="/carbonr4">排放填报</el-menu-item>
            <el-menu-item index="/carbonr5">排放报告</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="/discharge">
            <template #title>
              <el-icon><location /></el-icon>
              <span>基础配置</span>
            </template>
            <el-menu-item index="/carbonr6">核算单元设置</el-menu-item>
            <el-menu-item index="/carbonr7">核算主体设置</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>
      <el-main><router-view /></el-main>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const onClick = () => {
  console.log("router ---");
};
</script>
<style>
.body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
.el-main {
  --el-main-padding: 0;
}
* {
  margin: 0;
}
.tac {
  height: 100%;
}
</style>
