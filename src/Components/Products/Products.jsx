import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "../Product/Product";
import axios from "axios";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = (cat, filter, sort) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts ] = useState([]);

useEffect(()=>{
  const getProducts = async ()=> {
    try{
      const res = await axios.get(cat ? `http://http://localhost:3000/products?category=${cat}` : 'http://http://localhost:3000/products')
      setProducts(res.data)
    }
    catch (err){}
  };
  getProducts()
},[cat])

useEffect(()=>{
  cat && setFilteredProducts(
    products.filter(item=> 
      Object.entries(filter).every(([key, value])=> 
      item[key].includes(value)) )
  )


},[products, cat, filter])

useEffect(()=>{
if ((sort = "newest")) {
  setFilteredProducts((prev) => 
  [...prev].sort((a,b) => a.createdAt - b.createAt));
}
else if ((sort = "asc")) {
  setFilteredProducts((prev) => 
  [...prev].sort((a,b) => a.price - b.price));
}
else {
  setFilteredProducts((prev) => 
  [...prev].sort((a,b) => b.price - a.price));
}


},[sort])


  return (
    // <Container>
    //   {cat ? filteredProducts.map((item) => ( <Product item={item} key={item.id} />)) :
    //   products.slice.map((item) => ( <Product item={item} key={item.id} />))}
    // </Container>
        <Container>
        {popularProducts.map((item) => ( <Product item={item} key={item.id} />))
        }
      </Container>
  );
};

export default Products;