import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'

import useToken from '../App/useToken'

const Navbar = ({toggle}) => {

    const { token } = useToken();

    if(token) {

    return (
        <>
            <Nav>
                <NavLink to='/'>

                    <textStroke>Aroma Mocha Cafe</textStroke>
                    
                    </NavLink>

                <NavIcon onClick={toggle}>

                    <p>Menu </p>
                    <Bars />

                </NavIcon>

            </Nav>
        </>
    )

    } else {
        return(

        <>
            <Nav>
                <NavLink to='/'>

                    <textStroke>Aroma Mocha Cafe</textStroke>
                    
                    </NavLink>

                <NavIcon/>

            </Nav>
        </>
        )
    }
}

export default Navbar;
