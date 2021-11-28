import React from "react"
import { ProductsContainer, ProductsHeading, ProductWrapper, ProductDisplay, ProductImage, ProductInfo, ProductName, ProductDescription, ProductPrice, ProductBtn } from "./ProductsElements"

const Products = ({ products }) => {
    return (
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
    );
};

export default Products;
