<template>
  <section>

    <el-table
      :data="issues"
      style="width: 100%">
      <el-table-column
        prop="number"
        label="#"
        width="90">
      </el-table-column>
      <el-table-column
        prop="state"
        label="status"
        width="90">
      </el-table-column>
      <el-table-column
        prop="title"
        label="title">
      </el-table-column>
    </el-table>

  </section>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  computed:{
    issues(){
      return this.$store.state.issues.issues;
    }
  },
  mounted(){
    this.$store.dispatch("issues/getIssues")
  }
}
</script>

<style>
</style>
