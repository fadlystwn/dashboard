import axios from 'axios';
import { getCookie } from '../helpers/cookies';

const token = getCookie('token')

const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept-Language': 'en,en-US;q=0.9,id;q=0.8,th;q=0.7',
    'Authorization': `Bearer ${token}`
}

export const supplier = async (data) => {
    const res = await axios({
        method: 'get',
        url: 'https://petronasdemo.aa.assetdata.xyz/api/v1/setting/supplier/filter?orderCol=name&orderDir=asc&limit=15',
        headers: headers,
    })
    return res;
}

export const addSupplier = async (data) => {
    const res = await axios({
        method: 'post',
        url: '/',
        headers: headers,
    })
    return res;
}

export const editSupplier = async (data) => {
    const res = await axios({
        method: 'put',
        url: '/',
        headers: headers,
    })
    return res;
}

export const deleteSupplier = async (data) => {
    const res = await axios({
        method: 'delet',
        url: '/',
        headers: headers,
    })
    return res;
}

