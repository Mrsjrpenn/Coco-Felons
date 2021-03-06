import React, { useState, useEffect, useContext } from "react";
import AddToCart from "./AddToCart";
import { Card } from "react-bootstrap";
import RemoveFromCart from "./RemoveFromCart";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function Products(props) {
  const [products, setProducts] = useState([]);
  const { cartState, cartDispatch } = useContext(cartContext);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`/api/products`);
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  const productsToRender = products.map((product) => {
    return (
      <>
        <div className="products">
          <Card style={{ width: "19rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title class="prodName">{product.productName}</Card.Title>
              <Card.Text>
                <p>{product.productDescription}</p>
                <p>Our Price: ${product.currentPrice / 100}</p>
                <p>Qty In Stock: {product.productQuantity}</p>
                <p>MSRP: ${product.MSRP / 100}</p>
                <p>SKU: {product.SKU}</p>
              </Card.Text>
              {cartState.products ? (
                cartState.products.filter(
                  (item) => item.productId === product.id
                ).length === 0 ? (
                  <AddToCart
                    variant="primary"
                    productId={product.id}
                    productId={product.id}
                    currentPrice={product.currentPrice}
                    setProducts={setProducts}
                  />
                ) : (
                  <p>Added to Cart!</p>
                )
              ) : (
                <AddToCart
                  productId={product.id}
                  currentPrice={product.currentPrice}
                  setProducts={setProducts}
                />
              )}
              <Link to={`/Product/${product.id}`}>View Product</Link>
            </Card.Body>
          </Card>
          {/* <div>
          <h2>{product.productName}</h2>

          <img src={product.image} />
          <p>{product.productDescription}</p>
          <p>Our Price: ${product.currentPrice}</p>
          <p>Qty In Stock: {product.productQuantity}</p>
          <p>MSRP: ${product.MSRP}</p>
          <p>SKU: {product.SKU}</p> */}
          {
            // If the cartState.products array contains a product with this product's id
            // we can conditianlly render a message saying it's already in the cart
            // DONE :D
          }
          {/* {cartState.products ? (
            cartState.products.filter((item) => item.productId === product.id)
              .length === 0 ? (
              <AddToCart
                productId={product.id}
                currentPrice={product.currentPrice}
                setProducts={setProducts}
              />
            ) : (
              <p>Added to Cart!</p>
            )
          ) : (
            <AddToCart
              productId={product.id}
              currentPrice={product.currentPrice}
              setProducts={setProducts}
            />
          )}
          <Link to={`/Product/${product.id}`}>View Product!</Link> */}
        </div>
      </>
    );
  });

  return (
    <>
      <h2>Welcome to your ultimate Coco HQ - Go Nuts!</h2>
      <div className="productContainer">{productsToRender}</div>
    </>
  );
}

export default Products;
