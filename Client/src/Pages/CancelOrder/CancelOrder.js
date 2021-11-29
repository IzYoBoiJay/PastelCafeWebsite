import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { RegH1 , RegP, RegLabel, RegInput, RegForm, RegText } from "../Register/RegisterElements";
import useToken from "../../components/App/useToken";

const CancelOrder = () => {

    const { token, setToken} = useToken();



    return(
        <div>
            <h1>
            {token.username}
            </h1>
        </div>
        
    )
}

export default CancelOrder;