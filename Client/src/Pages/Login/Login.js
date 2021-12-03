// Login page implementation
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { RegH1, RegP, RegLabel, RegInput, RegForm, RegBtn } from "./LoginElements";

import Navbar from "../../components/Navbar";

var fetchSuccess = false;

async function loginValidate(loginInfo) {

  return fetch('http://localhost:5000/LoginValidate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
  })
  .then(response => {
    console.log(response, "Response");

    if(response.status == 401) {
      localStorage.removeItem("token");

    }

    return response.json();

  })
  .then(data => {
    console.log(data, "Data")

    if (data) {

      fetchSuccess = true;

    }
  });
}

async function loginSuccess(loginInfo) {
  return fetch('http://localhost:5000/LoginSuccess', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
  })
    .then(data => data.json())
 }

export default function Login ( {setToken} ){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {

    e.preventDefault();

    try {
      alert(
          "Your Username: " +
          username +
          "\nYour Password: " +
          password
      );

      const authenticate = await loginValidate({username, password});

      console.log(authenticate);

      if(fetchSuccess) {

        alert("Login success!");
        const token = await loginSuccess({username, password});

        setToken(token);
        console.log(token);
  
      }
      else{
  
        alert("No match for login credentials found");

      }
      
    } catch (error) {

      console.log(error.message);
      
    }
  }

    return (
      <div>
        
        <Navbar/>

        <RegH1>Welcome back Mocha!</RegH1>
        <RegP>Fill in the form to login.</RegP>

        <RegForm onSubmit={handleSubmit}>

          <RegLabel>
            Enter a username:
            <RegInput
              name="username"
              type="text"
              username={username}
              onChange={e => setUsername(e.target.value)}
            />
          </RegLabel>

          <RegLabel>
            Enter a password:
            <RegInput
              name="password"
              type="password"
              password={password}
              onChange={e => setPassword(e.target.value)}
            />
          </RegLabel>

          <RegLabel />
          <RegInput type="submit" value="        Submit" />

        </RegForm>

        <RegP className = "mt-5">
          Not a member yet? Register now!
        </RegP>

        <a href = "/Register">
        <RegBtn>
          Register
        </RegBtn>
        </a>

      </div>
    );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};