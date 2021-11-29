import React, {useState} from 'react'
import { Route } from 'react-router'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./HeroElements"

import useToken from '../App/useToken'

const Hero = () => {

    const { token, setToken} = useToken();

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {

        setIsOpen(!isOpen)

    }

    return (
        <HeroContainer>

            <Navbar toggle={toggle}/>

            <Sidebar isOpen={isOpen} toggle={toggle} />

            <HeroContent>

                <HeroItems>

                    <HeroH1>Welcome back {token.username} </HeroH1>

                    <HeroH1>
                        Mo Espresso, Less Depresso
                    </HeroH1>

                    <HeroP>
                        Feel hot like an espresso and cool like an iced mocha
                    </HeroP>

                    <HeroBtn to="Menu">

                        Order Now!

                    </HeroBtn>

                </HeroItems>

            </HeroContent>

        </HeroContainer>
    )
}

export default Hero
