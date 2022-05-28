import React, { useState, useEffect } from "react";

const Profile = ({username, token}) => {
    const [profile,setprofile] = useState({});

    useEffect(() =>
    {
        fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization : `Bearer ${token}`
            }
 
        }) .then((res)=> res.json())
        .then((res)=> console.log(err))
        .catch((err)=> console.log(err));
    },[]);
    console.log("profile",profile)
  return (

    <div>
        <h1>Profile</h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    </div>
  )
}

export default Profile