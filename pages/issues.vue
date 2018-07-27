<template>
  <section>

    <el-form ref="form">
      <el-form-item label="Open/Close">
        <el-switch v-model="form.status"></el-switch>
      </el-form-item>
      <el-form-item label="Label">
        <el-input placeholder="Please input" v-model="form.label"></el-input>
      </el-form-item>
      <el-form-item label="Sort By">
        <el-select v-model="form.sortBy" placeholder="please select ">
          <el-option label="作成日順" value="created"></el-option>
          <el-option label="更新日順" value="updated"></el-option>
        </el-select>
        &nbsp;
        <el-radio-group v-model="form.order">
          <el-radio label="desc"></el-radio>
          <el-radio label="asc"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Since">
        <el-date-picker type="date" placeholder="Pick a date" v-model="form.since"></el-date-picker>
      </el-form-item>
    </el-form>

    <el-button @click="reload">検索</el-button>
    <el-button @click="reset">リセット</el-button>

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
      <el-table-column
        label="edit">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="linkToEditPage(scope.row)">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>

  </section>
</template>

<script>

const makeDefaultFormState = ()=>({
  label: "",
  status: true,
  sortBy: "created",
  order: "desc",
  since: null
})

export default {
  data(){
    return {
      form: makeDefaultFormState()
    }
  },
  computed:{
    issues(){
      return this.$store.state.issues.issues;
    }
  },
  mounted(){
    this.$store.dispatch("issues/getIssues")
  },
  methods:{
    reload(){
      const payload = {
        state: this.form.status ? "open":"closed",
        labels: this.form.label,
        sort: this.form.sortBy,
        direction: this.form.order
      }
      if(this.form.since){
        payload.since = this.form.since.toISOString()
      }
      this.$store.dispatch("issues/getIssues",payload)
    },
    reset(){
      this.form = makeDefaultFormState()
      this.$store.dispatch("issues/getIssues")
    },
    linkToEditPage(issue){
      this.$router.push("/edit/"+issue.number)
    }
  }
}
</script>

<style>
</style>
