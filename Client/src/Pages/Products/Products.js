import React, {useState, useEffect} from "react"
import { ProductsContainer, ProductsHeading, ProductWrapper, ProductDisplay, ProductImage, ProductInfo, ProductName, ProductDescription, ProductPrice, ProductBtn } from "./ProductsElements"
import products, { productItem } from "./data"

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Products = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
  
        setIsOpen(!isOpen)
  
    }

    const[foodId, setFoodId] = useState(1);

    const cart = async () => {


        try {

        alert(
            "Your thing: " +
            foodId
        );

        const body = {foodId};

        const response = await fetch("http://localhost:5000/Menu", {

            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)

        });

      console.log(response);
      
    } catch (error) {

      console.log(error.message);
      
    }

  }

    return (
        <div id = "Product">
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
        
        <ProductsContainer>

            <ProductsHeading>Taste the Aroma</ProductsHeading>

            <ProductWrapper>
                {products.map((product, index) => {
                    return(
                        <ProductDisplay key={index}>

                            <ProductImage src={product.image} alt={product.alt} />

                            <ProductInfo>

                                <ProductName>{product.name}</ProductName>
                                <ProductDescription>{product.desc}</ProductDescription>
                                <ProductPrice>{product.price}</ProductPrice>

                                <ProductBtn onClick= {() =>{
                                    setFoodId(index + 1);
                                    cart();
                                    }}>
                                        {product.btn}
                                    
                                </ProductBtn>

                            </ProductInfo>

                        </ProductDisplay>
                    )
                })}
            </ProductWrapper>

        </ProductsContainer>

    </div>
    );
};

export default Products;