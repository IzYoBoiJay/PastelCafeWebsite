import React, {useState} from 'react'

import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./HeroElements"

import useToken from '../App/useToken'


var existsAndNotComplete = false;
export var currentOrderID;

async function checkTicket(orderID) {

  return fetch('http://localhost:5000/checkTicket', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderID)
  })
  .then(response => {

    console.log(response, "Response");

    return response.json();

  })
  .then(data => {

    console.log(data, "Data");

    existsAndNotComplete = data;

  });
}

const Hero = () => {

    const { token } = useToken();

    const [isOpen, setIsOpen] = useState(false);
    const [orderID, setOrderID] = useState(1);

    const toggle = () => {

        setIsOpen(!isOpen)

    }

    const makeTicket = async () => {

        try{
            alert("test");
            const body = {user: token.username};

            const response = await fetch("http://localhost:5000/OrderNow", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)

            });

            console.log(response);

        } catch (error) {

            console.log(error.message);

        }

    }

    const ticketValidate = async () => {

        alert("Current order ID:" + orderID);

        try{

            const authenticate = await checkTicket({orderId: orderID});
    
            console.log(authenticate);
        
        } catch (error) {
    
            console.log(error.message);
            
        }

        if(existsAndNotComplete) {

            alert("EXISTS");
            currentOrderID = orderID;
            alert("Order ID after Validation: " + currentOrderID);

        } else {

            setOrderID(orderID + 1);
            currentOrderID = orderID;
            alert("DOES NOT EXIST");
            alert("Order ID after Validation: " + (currentOrderID));
        }


    }

    return (
        <HeroContainer>

            <HeroContent>

                <HeroItems>

                    <h1>Welcome back, {token.username} </h1>

                    <HeroH1>
                        Mo Espresso, Less Depresso
                    </HeroH1>

                    <HeroP>
                        Feel hot like an espresso and cool like an iced mocha
                    </HeroP>

                    <HeroBtn onclick= {() =>{
                             makeTicket();
                             }} to="Menu">
                         
                        Order Now!

                    </HeroBtn>

                    <HeroBtn onClick={() => {

                        ticketValidate();

                    }} to="/">Check Ticket</HeroBtn>

                </HeroItems>

            </HeroContent>

        </HeroContainer>
    )
}

export default Hero;
