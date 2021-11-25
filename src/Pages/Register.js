import React from "react";
import { RegH1, RegP, RegLabel, RegInput, RegForm } from "./RegisterElements";
{/*import client from "../db";*/}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    alert(
      "Your Username: " +
        this.state.username +
        "\nYour Password: " +
        this.state.password
    );

    {/*
    client.connect();

    client.query(
      `INSERT INTO users(username, password) VALUES('`+ this.state.username +`', '`+ this.state.password `');`,
      (err, res) => {
        if (!err) {
          console.log(res.rows);
        } else {
          console.log(err.message);
        }
        client.end();
      }
    );
    */}

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <RegH1>Register to become part of the Mochas</RegH1>
        <RegP>Fill in the form to create an account.</RegP>

        <RegForm onSubmit={this.handleSubmit}>
          <RegLabel>
            Enter a username:
            <RegInput
              name="username"
              type="text"
              username={this.state.username}
              onChange={this.handleChange}
            />
          </RegLabel>

          <RegLabel>
            Enter a password:
            <RegInput
              name="password"
              type="text"
              password={this.state.password}
              onChange={this.handleChange}
            />
          </RegLabel>

          <RegLabel />
          <RegInput type="submit" value="Submit" />
        </RegForm>
      </div>
    );
  }
}

export default Register;
