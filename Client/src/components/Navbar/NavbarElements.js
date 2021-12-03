// CSS for navbar components
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FiCoffee } from "react-icons/fi";

//NavBar
export const Nav = styled.nav`

    background: #F9E2E8;
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: x-large;
    font-weight: 800;
    
    textStroke {
        color: white;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
      }

`;

export const NavLink = styled(Link)`

    color: #fff;
    font-size: rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    
    @media screen and (max-width: 400px) {
        
        position: absolute;
        top: 10px;
        left: 25px;

    }
`;

export const NavIcon = styled.div`
    
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;


p {
    transform: translate(-175%, 100%);
    font-weight: bold;
}

`

export const Bars = styled(FiCoffee)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`