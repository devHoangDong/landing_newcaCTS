import React from 'react';
import { useState, useEffect } from 'react';

export default function GetToken() {
    const [myToken,setMyToken] = useState('');
    const [listProvince,setListProvince] = useState([]);
    const userLogin = () => {
    var formdata = new FormData();
    formdata.append("username", "nvkd1");
    formdata.append("password", "123456");
    formdata.append("type_system", "2");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://demo.api.newca.vn/api/auth/login", requestOptions)
      .then(response => response.text())
      .then(result => {
          console.log(result);
          setMyToken(result.token)
      })
      .catch(error => console.log('error', error));
    }
    const getProvince = (myToken) => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", myToken);
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("https://demo.api.newca.vn/api/cate/province", requestOptions)
        .then(response => response.text())
        .then(result => {
            result.data.reduce((acc,arr,i) => {
                acc.push(arr.fullName);
                return acc
            },[])
            console.log(acc, 'List');
        })
        .catch(error => console.log('error', error));
    }
    useEffect( () => {
        userLogin();
        getProvince(myToken);
    })
    return (
        <div>
            
        </div>
    )
}
