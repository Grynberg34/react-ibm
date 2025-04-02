import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions"
import { Container, Row, Col } from "react-bootstrap";
import "../styles/products.scss";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  console.log(cart)

  const groupSet = new Set();
  products.forEach((product) => product.groups.forEach((group) => groupSet.add(group)));
  const uniqueGroups = Array.from(groupSet);

  return (
    <Container className="products">
      {uniqueGroups.map((group, index) => (
        <div key={index} className="products__group">
          <h1 className="products__group__name">{group}</h1>
          <Row>
            {products
              .filter((product) => product.groups.includes(group))
              .map((product) => {
                const isInCart = cart.some((item) => item.id === product.id);

                return (
                  <Col key={product.id} md={4} sm={6} xs={12}>
                    <div className="products__group__card">
                      <h2 className="products__group__card__name">{product.name}</h2>

                      <img
                        className="products__group__card__thumbnail"
                        src={product.thumbnail}
                        alt={product.name}
                      />

                      <p className="products__group__card__description">{product.description}</p>

                      <h3 className="products__group__card__price">{product.price}$</h3>

                      <button
                        className={`products__group__card__button ${isInCart ? "disabled" : ""}`}
                        onClick={() => dispatch(addToCart(product))}
                        disabled={isInCart}
                      >
                        {isInCart ? "Added to cart" : "Add to cart"}
                      </button>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      ))}
    </Container>
  );
}