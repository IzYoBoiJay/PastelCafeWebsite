// Cart page css style elements
import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartH1 = styled.h1`
    text-align: center;
    color: #957DAD;
    margin-bottom: 1rem;
    margin-top: 1rem;
    letter-spacing: 3px;
`;

export const CartBtnRoute = styled(Link)`


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
    text-align: center;

    &:hover {

        background: #fff;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        color: #000;

    }

`;

export const CartBtn = styled.button`


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
    text-align: center;

    &:hover {

        background: #fff;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        color: #000;

    }

`;