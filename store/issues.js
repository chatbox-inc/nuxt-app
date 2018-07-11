import axios from "axios"

export const state = ()=>{
  return {
    issues: []
  }
}

export const mutations = {
  SET_ISSUES(state,issues){
    state.issues = issues
  }
}

export const actions = {
  async getIssues({commit}){
    const api = axios.create({
      baseURL: "https://api.github.com/",
      auth: {
        username: 'mikakane',
        password: process.env.GITHUB_TOKEN
      },
    });
    // api.get("/user/issues");
    const {data} = await api.get("/repos/chatbox-inc/nuxt-app/issues");
    commit("SET_ISSUES",data)
  }
}
