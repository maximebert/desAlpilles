import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from '../../Components/Annoucement/Annoucement';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Products from '../../Components/Products/Products';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-size: 3em;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;

`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location =useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilters] = useState({})

  const [sort, setsorts] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters ({ ...filter,
      [e.target.name]: value
    })
  }
  console.log(filter)
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Femme</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter par:</FilterText>
          <Select name= "color" onChange={handleFilters}>
            <Option disabled>
              Couleur
            </Option>
            <Option>Blanc</Option>
            <Option>Noir</Option>
            <Option>Rouge</Option>
            <Option>Bleu</Option>
            <Option>Jaune</Option>
            <Option>Vert</Option>
          </Select>
          <Select name= "size" onChange={handleFilters}>
            <Option disabled>
              Taille
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Trier par:</FilterText>
          <Select name= "color" onChange={(e) => setsorts(e.target.value)}>
            <Option value="newest">Nouveautées</Option>
            <Option value="desc">Du plus cher au moins cher</Option>
            <Option value="asc">Du moins cher au plus cher</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat = {cat} filter={filter} sort = {sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;