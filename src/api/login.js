import axios from 'axios'

const headers = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json;charset=UTF-8',
  'Accept-Language': 'en,en-US;q=0.9,id;q=0.8,th;q=0.7',
}

const login = (data) => {
  return axios({
    method: 'post',
    url: 'https://petronasdemo.aa.assetdata.xyz/api/v1/a/hash-login',
    headers: headers,
    data: { ...data, expire: 3600, type: 'automatic' },
  })
}

export default login
