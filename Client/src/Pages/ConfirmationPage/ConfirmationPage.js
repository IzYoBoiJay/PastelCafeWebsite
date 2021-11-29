import React, { Fragment, useState, useEffect } from "react";
import { RegH1, RegP, RegLabel, RegInput, RegForm } from "../Register/RegisterElements";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useToken from "../../components/App/useToken";


const ConfirmationPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { token, setToken} = useToken();

    const toggle = () => {

        setIsOpen(!isOpen)
  
    }

    return(
        <div>
            <Navbar toggle={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle} />
            <RegH1>
                Thanks {token.username}
                 ! Order Confirmed!
            </RegH1>
        </div>
    );
};

export default ConfirmationPage