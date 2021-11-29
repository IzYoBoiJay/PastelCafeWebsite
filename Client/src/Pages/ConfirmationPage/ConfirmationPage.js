import React, { Fragment, useState, useEffect } from "react";
import { RegH1, RegP, RegLabel, RegInput, RegForm } from "../Register/RegisterElements";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const ConfirmationPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {

        setIsOpen(!isOpen)
  
    }

    return(
        <div>
            <Navbar toggle={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle} />
            <RegH1>
                Order Confirmed!
            </RegH1>
        </div>
    );
};

export default ConfirmationPage