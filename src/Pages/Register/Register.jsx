import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/5788376/pexels-photo-5788376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Création d'un compte</Title>
        <Form>
          <Input placeholder="nom" />
          <Input placeholder="prénom" />
          <Input placeholder="nom d'utilisateur" />
          <Input placeholder="email" />
          <Input placeholder="mot de passe" />
          <Input placeholder="confimation du mot de passe" />
          <Agreement>
          En m'inscrivant, je reconnais avoir lu, compris et accepté les Conditions générales d'utilisation et de vente, ainsi que le Droit de rétractation (paragraphe 5) tout comme la protection des données.
          </Agreement>
          <Button>CREER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;