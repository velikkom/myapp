import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Product } from "./product";

export const ProductStore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-5">
      <h1 className="tect-center mb-4">Product Store</h1>

      {loading && (
        <Spinner
          animation="border"
          variant="danger"
          role="status"
          className="d-block mx-auto my-3"
        />
      )}

      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {products.map((item) => (
          <Col key={item.id}>
            <Product
              title={item.title}
              thumbnail={item.thumbnail}
              description={item.description}
              availabilityStatus={item.availabilityStatus}
              price={item.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
