import React, {useState} from "react"
import { ProductsContainer, ProductsHeading, ProductWrapper, ProductDisplay, ProductImage, ProductInfo, ProductName, ProductDescription, ProductPrice, ProductBtn } from "./ProductsElements"
import products from "./data"

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Products = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
  
        setIsOpen(!isOpen)
  
    }

    return (
        <div>
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

                                <ProductBtn onClick={(Print) =>{
                                    
                                    alert(index);

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
