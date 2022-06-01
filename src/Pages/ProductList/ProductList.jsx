import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from '../../Components/Annoucement/Annoucement';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Products from '../../Components/Products/Products';
import { mobile } from "../../responsive";
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Taille:</FilterText>
          <Select onChange={handleFilters}>
            <Option>PETIT</Option>
            <Option>MOYEN</Option>
            <Option>GRAND</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>TRIER PAR:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">NOUVEAUTÉE </Option>
            <Option value="asc">PRIX (asc)</Option>
            <Option value="desc">PRIX (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;