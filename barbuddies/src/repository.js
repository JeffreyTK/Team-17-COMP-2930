/* eslint-disable */

import axios from 'axios'
// the base url is the localhost at which the database is stored
const BASE_URL = 'http://159.203.57.79:5000'
export function createUser (data) {
  // on the post call if the url is this
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
  // on error will push out the error message
    //.catch(err => Promise.reject(err.message))
}
export function createGroup (data) {
  return axios.post(`${BASE_URL}/api/group/create`,
    {
      GroupID: data.GroupID,
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
export function findUser(email){
  return axios.get('${BASE_URL}/users/',).then(response => response.data)
}
