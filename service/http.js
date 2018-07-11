import axios from "axios"

export const getClient = () => {
  const api = axios.create({
    baseURL: "https://api.github.com/",
    auth: {
      username: 'mikakane',
      password: 'ce45019e749ef40e89d3e262ee9d752882e4f472'
    },
  });
  return api
}

export const getIssues = async () => {
  const api = getClient();
  const {data} = await api.get("/repos/chatbox-inc/nuxt-app/issues")
  return data
}
