// Menu Page implementation
import React, {useState, useEffect, ReactDOM} from "react"
import { ProductsContainer, ProductsHeading, ProductWrapper, ProductDisplay, ProductImage, ProductInfo, ProductName, ProductDescription, ProductPrice, ProductBtn } from "./ProductsElements"
import products from "./data"

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Products = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
  
        setIsOpen(!isOpen)
  
    }

    const cart = async (foodID, foodName) => {

        try {

        alert(
            "Your thing: " +
            foodID
            + "\nFood: " + foodName
        );

        const body = {foodID};

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
                                    cart(index, product.name);
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