import React from "react";
import { useState } from "react";
import { RegH1, RegP, RegLabel, RegInput, RegForm } from "./RegisterElements";
{/*import client from "../db";*/}

const Register = () => {

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

      const body = {username, password};

      const response = await fetch("http://localhost:5000/register", {

        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)

      });

      console.log(response);
      
    } catch (error) {

      console.log(error.message);
      
    }

  }


    return (
      <div>
        <RegH1>Register to become part of the Mochas</RegH1>
        <RegP>Fill in the form to create an account.</RegP>

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
              type="text"
              password={password}
              onChange={e => setPassword(e.target.value)}
            />
          </RegLabel>

          <RegLabel />
          <RegInput type="submit" value="Submit" />
        </RegForm>
      </div>
    );
}

export default Register;
