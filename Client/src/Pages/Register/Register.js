import React, { Fragment, useState } from "react";
import { RegH1, RegP, RegLabel, RegInput, RegForm } from "./RegisterElements";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Register = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {

      setIsOpen(!isOpen)

  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");

  const handleSubmit = async e => {

    e.preventDefault();

    try {

      alert(
          "Your Username: " +
          username +
          "\nYour Password: " +
          password
      );

      const body = {username, password, fname, lname, phoneNum, address};

      const response = await fetch("http://localhost:5000/register", {

        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)

      });

      console.log(response);

      ('#RegForm')[0].reset();
      
    } catch (error) {

      console.log(error.message);
      
    }

  }


    return (
      <div>

        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />

        <RegH1>Register to become part of the Mochas</RegH1>
        <RegP>Fill in the form to create an account.</RegP>

        <RegForm onSubmit={
          handleSubmit
        }>
        <RegLabel>
            Enter your first name:
            <RegInput
              name="first name"
              type="text"
              email = {fname}
              onChange={e => setfName(e.target.value)}
            />
          </RegLabel>

          <RegLabel>
            Enter your last name:
            <RegInput
              name="Last name"
              type="text"
              email = {lname}
              onChange={e => setlName(e.target.value)}
            />
          </RegLabel>

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

          <RegLabel>
            Enter your phone number:
            <RegInput
              name="phone number"
              type="text"
              phoneNum = {phoneNum}
              onChange={e => setPhoneNum(e.target.value)}
            />
          </RegLabel>

          <RegLabel>
            Enter your Address:
            <RegInput
              name="address"
              type="text"
              email = {address}
              onChange={e => setAddress(e.target.value)}
            />
          </RegLabel>

          <RegLabel />
          <RegInput type="submit" value="Submit" />
        </RegForm>
      </div>
    );
}

export default Register;
