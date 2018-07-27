<template>
  <section>

    <issue-new
      :form="form"
      :errors="errors"
      :isLoading="isLoading"
      @submit="submit"/>

  </section>
</template>

<script>

import {updateIssue} from "~/service/http";
import IssueNew from "~/components/IssueNewForm.vue";


export default {
  data(){
    return {
      form: {
        title: "",
        description: ""
      },
      errors:{
        title: false,
        description: false
      },
      isLoading: false
    }
  },
  components:{
    IssueNew
  },
  computed:{
    issues(){
      return this.$store.state.issues.issues;
    },
    issueNo(){
      return this.$route.params.id
    }
  },
  mounted(){
    for(let issue of this.issues){
      if(this.issueNo == issue.number){
        this.form.title = issue.title
        this.form.description = issue.body
      }
    }
  },
  methods:{
    async submit(){
      this.isLoading = true;
      if(this.form.title == ""){
        this.errors.title = true
        this.isLoading = false;
        return;
      }

      const payload = {
        title: this.form.title,
        body: this.form.description
      }
      const {data} = await updateIssue(this.issueNo, payload)
      this.$router.push("/issues")
    }
  }
}
</script>

<style>
</style>
