import styled from "styled-components";

export const RegH1 = styled.h1`
    text-align: center;
    color: #957DAD;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    letter-spacing: 3px;
`;

export const RegP = styled.p`

    text-align: center;
    font-size: 1.5em;

`;
{/*
export const RegForm = styled.form`

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

`;
*/}

export const RegForm = styled.form`

    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto;
    width: 50%;
    padding: 10px;

`;

{/*
export const RegLabel = styled.label`
    display: flex;
    flex-direction: column;
    width: 10em;
    padding-top: 1em;
    margin-right: 2em;
`;
*/}
export const RegLabel = styled.label`
    padding-top: 1em;
`;

{/*to clean up*/}
export const RegInput = styled.input`

    width: 15em;
    display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;
    padding: 15px 10px 15px 42px;
    border-radius: 1.1em;
    margin: auto;

`;

export const RegText = styled.label`

    width: 10em;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 15px 10px 15px 42px;
    text-align: left;
    margin: auto


`;

export const RegBtn = styled.button`


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
    margin: auto;
    display: flex;
    flex-direction: column;

    &:hover {

        background: #fff;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        color: #000;

    }

`;