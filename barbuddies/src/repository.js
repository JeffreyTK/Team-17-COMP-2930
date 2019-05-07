import axios from 'axios'
const BASE_URL = 'http://localhost:8080';
export function createUser(data) {
        return axios.post(`${BASE_URL}/api/user/create`, 
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            DOB:req.body.DOB,
            gender:req.body.gender,
            weight:req.body.weight,
            height:req.body.height,
            email:req.body.email,
            password:req.body.password,
            userID:req.body.userID,
            groupID:req.body.groupID
        })      .then(response => {
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}
export function createGroup(data) {
    return axios.post(`${BASE_URL}/api/group/create`, 
    {
        GroupID:{type:String},
        UserID:{type:Array}
    })      .then(response => {
                    return response.data
            })
            .catch(err => Promise.reject(err.message));
}

