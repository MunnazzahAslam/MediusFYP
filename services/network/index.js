/* eslint-disable import/named */
import { create } from 'apisauce'
// import { BASE_URL } from '../../constants'
const BASE_URL = "http://192.168.10.6:45456/api/"
//https://localhost:44364/api/
// http://ec2-52-15-148-90.us-east-2.compute.amazonaws.com/dev/

// Rest Client for Americamp APIs
export const RestClient = create({
  baseURL: `${BASE_URL}`,
  headers: {
    Accept: 'application/json',
    Authorization: '',
  },
  timeout: 60000,
})
