import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import log from "../../redux/apiCalls"

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
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color:green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color:red;
`

const Login = () => {
  const [username,setUsername]= useState("");
  const[password,setPassword]= useState("");
  const dispatch = useDispatch;
  const {isFetching, error} = useSelector((state)=> state.user)

  const handleClick = (e) => {
    e.preventDefault();
    log(dispatch, {username, password});
  }

  return (
    <Container>
      <Wrapper>
        <Title>Se Connecter</Title>
        <Form>
          <Input placeholder="Nom d'utilisateur" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="Mot de passe" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleClick} disabled={isFetching}>Se Connecter</Button>
          {error && <Error>Il semble qu'il y ait un soucis</Error>}
          <Link>Mot de passe oublié?</Link>
          <Link>Pas encore de compte?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;