
// import { USERS_URL } from '../apiConfig';
import { GET_ALL_USERLIST } from '../apiConfig';
import { LOGIN_URL } from '../apiConfig';
// import { LOGIN_URL } from '../apiConfig';

const axios = require('axios').default; 

export function getAllUsersList(){
       return axios.get(GET_ALL_USERLIST)
            .then(function (response) {
                // handle success
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            
}

export function LoginVerify(data){

    debugger
    var data = JSON.stringify({
        PhoneNo: data.userName,
        Password: data.password
      });
    var config = {
        method: 'post',
        url: 'http://localhost:4000/api/auth/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
    
    
    return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function createUsers(data){
   
      var data = JSON.stringify(data);

  var config = {
    method: 'post',
    url: 'http://localhost:4000/api/auth/create',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  return axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function OtpVerify(data){
  var data = JSON.stringify(data);

  var config = {
    method: 'post',
    url: 'http://localhost:4000/api/auth/verifyOtp',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  return axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}
