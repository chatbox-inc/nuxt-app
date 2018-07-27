<template>
  <section>
    <el-alert
      v-if="errors.title"
      title="タイトルを入力してください。"
      type="error">
    </el-alert>

    <el-form >
      <el-form-item label="Title">
        <el-input placeholder="Please input" v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input type="textarea" placeholder="Please input" v-model="form.description"></el-input>
      </el-form-item>
    </el-form>

    <el-button v-if="!isLoading" @click="submit">登録</el-button>
    <el-button v-if="isLoading">登録中</el-button>
  </section>
</template>

<script>

import {createIssue} from "~/service/http";


export default {
  props:["form"],
  data(){
    return {
      errors:{
        title: false,
        description: false
      },
      isLoading: false
    }
  },
  computed:{
  },
  mounted(){
  },
  methods:{
    async submit(){
      this.$emit("submit")
    }
  }
}
</script>

<style>
</style>
