/* eslint-disable */

import axios from 'axios'

// comment out for production
// const BASE_URL = 'http://localhost:5000'

const BASE_URL = 'http://159.203.57.79:5000'
export function createUser (data) {

  // sets the data of first name to the first name and responds with the data to the database
  axios.post(`${BASE_URL}/api/user/create`,
    {
      firstName: data.firstName,
      lastName: data.lastName,
      DOB: data.DOB,
      gender: data.gender,
      weight: data.weight,
      height: data.height,
      email: data.email,
      password: data.password,
      userID: data.userID,
      groupID: data.groupID
    }).then(response => {
      console.log(response);
      return response.data
    }).catch(err => {
      console.error(err);
    })
}
export function createGroup (data) {
  return axios.post(`${BASE_URL}/api/group/create`,
    {
      Events: data.Events,
      UserID: data.UserID,
      groupName: data.groupName
    }).then(response => {
    return response.data
  })
    .catch(err => Promise.reject(err.message))
}

export function updateUser1(data, id) {
	return axios.post(`${BASE_URL}/api/user/update/${id}`, { data
  }).then(response => {
    console.log('data pushed')

			return response.data
		})
		.catch(err => Promise.reject(err.message));
}
export function updateUser (id) {
  return axios.get(`${BASE_URL}/users/${id}`).then(response => response.data)
}

export function authUser (data){
  return axios.post(`${BASE_URL}/api/user/auth/`, 
  {
    email: data.email,
    password: data.password
  }).then(response => {
    return response.data
  })
}

export function groupFind(data){
  return axios.post(`${BASE_URL}/api/group/find`,
  {
    email: data.email
  }).then(response => {
    return response.data
  })
}

export function findUser(email) {
  return axios.get(`${BASE_URL}/users/find`).then(response => response.data)
}

export function makeEvent(data) {
  return axios.post(`${BASE_URL}/api/group/event`,
  {
    Events: data.Events,
    userEmail: data.userEmail
  }).then(response => {
    response.data
  }).catch(err)
}
