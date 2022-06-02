import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({cat}) => {
  const [productData, setProductData] = useState([]);
  

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/produits/${cat}`
      )
      .then((res) => setProductData(res.data));
  }, [cat]);


  return (
    <Container>
              {productData.map((item) => (
            <Product key={item.tilte} item={item} />
          ))}
    </Container>
  );
};

export default Products;