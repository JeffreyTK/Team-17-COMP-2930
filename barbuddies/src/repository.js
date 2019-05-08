import axios from 'axios'
<<<<<<< HEAD
const BASE_URL = 'http://localhost:5000'
=======
const BASE_URL = 'http://localhost:5000/'
>>>>>>> develop
export function createUser (data) {
  return axios.post(`${BASE_URL}/api/user/create`,
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
    return response.data
  })
    .catch(err => Promise.reject(err.message))
}
export function createGroup (data) {
  return axios.post(`${BASE_URL}/api/group/create`,
    {
      GroupID: {type: String},
      UserID: {type: Array}
    }).then(response => {
    return response.data
  })
    .catch(err => Promise.reject(err.message))
}
