import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>MADAME DES ALPILLES</Logo>
          <Desc>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium optio dolore cupiditate id at doloremque dolorem quisquam aspernatur perferendis recusandae, quae laudantium deserunt magnam, expedita asperiores sunt esse tenetur. Harum!
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Liens Utile</Title>
          <List>
            <ListItem>Accueil</ListItem>
            <ListItem>Panier</ListItem>
            <ListItem>Homme</ListItem>
            <ListItem>Femme</ListItem>
            <ListItem>Enfant</ListItem>
            <ListItem>Accessoire</ListItem>
            <ListItem>Mon Compte</ListItem>
            <ListItem>Suivi de ma commande</ListItem>
            <ListItem>Liste d'envies</ListItem>
            <ListItem>Conditions g??nerales</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 3 impasse des Tonneliers
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> 061400000
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> j.forest@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;