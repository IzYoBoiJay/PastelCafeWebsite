// Main Page implementation
import React, {useState, useEffect} from 'react'

import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./HeroElements"

import useToken from '../App/useToken'

const Hero = () => {

    const { token } = useToken();

    const makeTicket = async () => {

        try{

            const body = {user: token.username};

            const response = await fetch(`http://localhost:5000/OrderNow/`, {
    
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
    
            });
    
            console.log(response);
        
        } catch (error) {
    
            console.log(error.message);
            
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

                </HeroItems>

            </HeroContent>

        </HeroContainer>
    )
}

export default Hero