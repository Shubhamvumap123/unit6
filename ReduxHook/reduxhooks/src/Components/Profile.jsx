import React, { useState, useEffect } from "react";

const Profile = ({username, token}) => {
    const [profile,setprofile] = useState({});

    useEffect(() =>
    {
        fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((res) => setprofile(res))
          .catch((err) => console.log(err));
    },[]);
    console.log("profile",profile)
  return (

    <div>
        <h1>Profile</h1>
        <p>Name:{profile.name}</p>
        <p>Email:{profile.email}</p>
        <p>username:{profile.username}</p>
        <p>discriptions:{profile.description}</p>
        <p>mobile:{profile.mobile}</p>
    </div>
  )
}

export default Profile