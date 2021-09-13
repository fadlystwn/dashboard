import axios from 'axios'
import { getCookie } from '../helpers/cookies'

const token = getCookie('token')

const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json;charset=UTF-8',
  'Accept-Language': 'en,en-US;q=0.9,id;q=0.8,th;q=0.7',
  'Authorization': `Bearer ${token}`,
}

const profile = () => {
  return axios({
    method: 'get',
    url: 'https://petronasdemo.aa.assetdata.xyz/api/v1/a/me',
    headers: headers,
  })
}

export default profile
