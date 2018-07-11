import {getIssues} from "~/service/http.js"

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
    const issues = await getIssues()
    commit("SET_ISSUES",issues)
  }
}
