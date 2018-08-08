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

import {createIssue} from "~/service/http";
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
  },
  mounted(){
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
      const {data} = await createIssue(payload)
      this.$router.push("/issues")
    }
  }
}
</script>

<style>
</style>
