import React from 'react'
import { useState } from 'react';

import { RegH1, RegP, RegLabel, RegInput, RegForm } from './RegisterElements';


const Register = () => {

    return (
        <div>

            <RegH1>Register to become part of the Mochas</RegH1>
            <RegP>Fill in the form to create an account.</RegP>

            <RegForm>

                <RegLabel>

                    Enter a username:

                    <RegInput type="text"/>

                </RegLabel>

                <RegLabel>

                    Enter a password:

                    <RegInput type="text"/>


                </RegLabel>

                <RegLabel/>
                <RegInput type="submit" value="Submit"/>

            </RegForm>

        </div>
    )
}

export default Register;
