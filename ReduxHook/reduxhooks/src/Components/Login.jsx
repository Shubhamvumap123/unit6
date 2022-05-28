import React,{ useState,useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { login} from '../Redux/Login/action'
import {Navigate} from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isAuthenticated} = useSelector((state)=> state.login)
    const handleLogin = () => {
        const payload ={
            username,
            password
        };
dispatch(login(payload))
    }
    if(isAuthenticated){
  return <Navigate to="/" />
}
  return ( 
    <div>

      <input
        type="text"
        placeholder="Enter User"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <br />
      <br /> 
      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login