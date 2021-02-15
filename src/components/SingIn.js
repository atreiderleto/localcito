import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import logo from '../img/header/logo.svg'
import bg from '../img/singin/bg1.svg'

import Footer from './Footer';

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  
  a {
    text-decoration: none;
  }

  @media (max-width: 1240px) {
    padding: 10px;
  }

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 50px;
`;


const Titulo = styled.h1`
    margin: 0px 0px 0px 10px;
    font-size: 25px;
    color: #1B2B71;
    
`;

const TituloSub = styled.span`
    color: #FFD23F;
    
`;

const Bg = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 60%;
  height: 800px;
  padding: 20px;
  border-radius: 30px;

 

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 10%;
    }
  }

  h3 {
    width:55%;
    font-size: 60px;
    color: #FFD23F;
    margin-left: 20px;

    @media (max-width: 1024px) {
      width: 100%;
      font-size: 40px;
      text-align: center;
  }
  }

  span {
    color: #FFFFFF;
  }

  @media (max-width: 1024px) {
      display: none;
  }

`;

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content:center;
  align-items: center;
  width: 36%;
  color: #1B2B71;

  @media (max-width: 1024px) {
    width: 100%;
  }



  img {
    width: 100%;
  }

  label {
    width: 70%;
    margin-top: 30px;

    @media (max-width: 1240px) {
      width: 90%;
  }
  }

  input[type=email],
  input[type=password] {
    width: 70%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #1B2B71;
    margin-top: 5px;
    padding-left: 10px;
    color: #1B2B71;
    font-size: 18px; 

    @media (max-width: 1024px) {
      width: 90%;
    }
  }

  input[type=submit] {
    width: 72%;
    height: 50px;
    border-radius: 10px;
    margin-top: 30px;
    font-size: 16px;
    background-color: #FFD23F;
    border: none;
    cursor: pointer;

    :hover {
      color: #FFD23F;
      background-color: #3253E3
    }

    @media (max-width: 1024px) {
      width: 92%;
    }
    
  }

`;

const Recover = styled.div` 
  display: flex;
  flex-direction: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 72%;
  margin-top: 30px;

  input[type=checkbox]::checked {
    padding: 10px;
  }

  label {
    margin-left: 10px;
  }

  a { 
    width: 50%;
    text-align: right;
  }

  @media (max-width: 1024px) {
      width: 92%;
    }
`;

const NewAcc = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;

  a {
    width: 72%;
    height: 40px;
    border-radius: 10px;
    margin-top: 30px;
    padding-top: 20px;
    font-size: 16px;
    border: 1px solid #3253E3; 
    text-align:center;
    color: #3253E3;

    :hover {
      color: #FFD23F;
      background-color: #3253E3
    }

    @media (max-width: 1024px) {
      width: 90%;
    }

  }
`;

// Component Logic
const SingIn = () => {

  const formObj = {
    email: '',
    password: ''
  }

  return (
    <>
    <Main>
      <Form>
        <Logo>
          <Link to='/'><img src={logo} alt="logo" /></Link>
          <Link to='/'><Titulo>Local<TituloSub>sito</TituloSub></Titulo></Link>
        </Logo>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formObj.email} placeholder="ejemplo@ejemplo.com" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formObj.password} placeholder="***************" />

        <input type="submit" value="Login" />

        <Recover>
          <div>
            <input type="checkbox" name="remember" />
            <label htmlFor="remember">Recordar</label>
          </div>
          <Link to="/">Olvido su Contraseña?</Link>
        </Recover>


        <NewAcc>
          <h3>No tiene  Cuenta?</h3>
          <Link to="/singup">Crear una Cuenta</Link>
        </NewAcc>

      </Form>
      <Bg>
        <div>
          <img src={logo} alt="logo" />
          <h3>Happy <span>businesses</span></h3>
        </div>
      </Bg>
    </Main>
    <Footer/>
    </>
  );
}

export default SingIn;  
