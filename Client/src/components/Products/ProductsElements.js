import styled from "styled-components";

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #655FB0;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductDisplay = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImage = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  border-radius: 25% 10%;
  box-shadow: 8px 8px #E3D5E8;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductName = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDescription = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductBtn = styled.button`

  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  border-radius: 30px;
  background: #E3D5E8;
  color: #000;
  transition: 0.2 ease-in-out;

  &:hover {

    background: #fff;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: #000
    
  }
`;