import styled from "styled-components";
import imageBackground from "../../images/coffeeanimalart.jpg";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`

    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${imageBackground});
    height: 100vh;
    background-position: center;
    background-size: cover;

`;

export const HeroContent = styled.div`

    height: calc(100vh - 80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) / 2);

`

export const HeroItems = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #E3D5E8;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {

        width: 100%;

    }

`

export const HeroH1 = styled.div`

    font-size: clam(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #E3D5E8;
    letter-spacing: 3px;

`

//Paragraph Element
export const HeroP = styled.p`

    font-size: clam(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;

`

export const HeroBtn = styled(Link)`


    background: #E3D5E8;
    white-space: nowrap;
    padding: 16px 64px;
    color: #000;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {

        background: #fff;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        color: #000;

    }

`;