import React, { Fragment } from "react";
import { useState } from "react";
import { RegH1, RegP, RegLabel, RegInput, RegForm } from "./LoginElements";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";


const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {

      setIsOpen(!isOpen)

  }


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

      const response = await fetch("http://localhost:5000/login", {

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
        
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />

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
