import axios from "axios"

export const getClient = () => {
  const api = axios.create({
    baseURL: "https://api.github.com/",
    auth: {
      username: 'mikakane',
      password: process.env.GITHUB_TOKEN
    },
  });
  return api
}

export const getIssues = async () => {
  const api = getClient();
  const {data} = await api.get("/repos/chatbox-inc/nuxt-app/issues")
  return data
}
