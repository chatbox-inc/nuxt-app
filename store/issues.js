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
  async getIssues({commit},payload = {}){
    const issues = await getIssues(payload)
    commit("SET_ISSUES",issues)
  }
}
