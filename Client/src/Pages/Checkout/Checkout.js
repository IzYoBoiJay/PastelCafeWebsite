import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { RegH1 , RegP, RegLabel, RegInput, RegForm, RegText } from "../Register/RegisterElements";

const Checkout = () => {
    const [cardNo, setCardNo] = useState("");
    const [gratuity, setGratuity] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {

        setIsOpen(!isOpen)
  
    }

    const handleSubmit = async e => {
        
        e.preventDefault();

        try{

            const body = {cardNo, gratuity};

            const response = await fetch("http://localhost:5000/Checkout", {
    
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
    
            });
    
            console.log(response);
        
        } catch (error) {
    
            console.log(error.message);
            
        }

    }

    const [total, setTotal] = useState(0);

    const getTotal = async () => {
        try {
            const response = await fetch("http://localhost:5000/total");
            const jsonData = await response.json();
            
            console.log(jsonData);
            
            setTotal(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    };



    return (
        <div>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            
            <Fragment>

                    <RegH1>Done Shopping? Checkout now!</RegH1>
                    <RegP>Fill in the information below to place your order!</RegP>

                    <RegText>
                        <getTotal/>
                        Total:  {total}

                        
                    </RegText>

                    <RegForm onSubmit={handleSubmit}>

                    <RegLabel>
                        Enter card number:
                        <RegInput
                        name="Card Number"
                        type="text"
                        username={cardNo}
                        onChange={e => setCardNo(e.target.value)}
                        />
                    </RegLabel>

                    <RegLabel>
                        Enter gratuity:
                        <RegInput
                        name="Gratuity"
                        type="text"
                        password={gratuity}
                        onChange={e => setGratuity(e.target.value)}
                        />
                    </RegLabel>




                    <RegLabel />
                    <RegInput type="submit" value="Submit" />

                    </RegForm>
                
            </Fragment>
        </div>
    );
};

export default Checkout;