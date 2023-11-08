import React, { useContext, useState } from "react";

import UserContext from "../../userContext";

function Login() {

    const {setUser} = useContext(UserContext)
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const handleClick = (e) =>{
    e.preventDefault()
    console.log("submit")
    setUser({userName, password})
  }

  return (
    <div>
      <input
        value={userName}
        placeholder="UserName"
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        value={password}
        placeholder="Password"
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type = 'submit' onClick = {handleClick}> Submit</button>
    </div>
  );
}

export default Login;
