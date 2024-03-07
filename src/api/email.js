import axios from 'axios'
import apiUrl from '../apiConfig.js'

// get all emails 
export const getEmails = (user) => {
  return axios.get(apiUrl + '/emails', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}