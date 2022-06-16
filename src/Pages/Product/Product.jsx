import styled from "styled-components";
import Announcement from '../../Components/Annoucement/Annoucement';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Newsletter from '../../Components/Newsletter/Newsletter';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import { mobile } from "../../responsive";
import axios from 'axios'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-products: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;


const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {

  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/produit/${params.id}`);
        setProduct(res.data[0]);  
       } catch {}
      };
      getProduct();
  }, [params.id]);

  const handleClick = () => {
    dispatch(
        addProduct(product)
    );
  };
  return (
    <Container>
       <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price} €</Price>

          <AddContainer>

            <Button onClick={handleClick}>Ajouter au favoris</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;