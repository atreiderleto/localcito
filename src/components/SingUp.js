import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import 'react-alice-carousel/lib/alice-carousel.css';
import logo from '../img/header/logo.svg'
import bg from '../img/singup/bg1.png'

import AliceCarousel from 'react-alice-carousel';
import Footer from './Footer';
import '../css/singup.css';

//temporal carouse picture the real comes from firebase
import foto1 from '../img/carousel/foto1.png';
import foto2 from '../img/carousel/foto2.png';
import foto3 from '../img/carousel/foto3.png';


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
  flex-flow: row wrap;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 60%;
  height: 800px;
  padding: 20px;
  border-radius: 30px;

    .alice-carousel__stage-item * {
	    margin-left: 115px !important;
    }

    h3 {
      width: 59%;
      margin-top: 20px;
      color: #FFFFFF;
      text-align: center;
    }

    @media (max-width: 1024px) {
      width: 100%;
      font-size: 40px;
      text-align: center;
    }

    @media (max-width: 1024px) {
      display: none;
    }
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
  input[type=password],
  input[type=text] {
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
  flex-direction: column wrap;
  justify-content: space-between;
  align-items: center;
  width: 72%;
  margin-top: 30px;

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

//Carousel logic

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

const items = [
  <div className="item" data-value="1">
    <img src={foto1} />
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed ante vitae magna iaculis volutpat eu at purus.</h3>
  </div>,
  <div className="item" data-value="2">
    <img src={foto2} />
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed ante vitae magna iaculis volutpat eu at purus.</h3>
  </div>,
  <div className="item" data-value="3">
    <img src={foto3} />
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed ante vitae magna iaculis volutpat eu at purus.</h3>
  </div>,
  <div className="item" data-value="4">
    <img src={foto1} />
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed ante vitae magna iaculis volutpat eu at purus.</h3>
  </div>,
  <div className="item" data-value="5">
    <img src={foto2} />
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed ante vitae magna iaculis volutpat eu at purus.</h3>
  </div>,
];


// Component Logic
const SingUp = () => {

  const formObj = {
    name: '',
    email: '',
    password: '',
    confirm: ''
  }

  return (
    <>
      <Main>
        <Form>
          <Logo>
            <Link to='/'><img src={logo} alt="logo" /></Link>
            <Link to='/'><Titulo>Local<TituloSub>sito</TituloSub></Titulo></Link>
          </Logo>

          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" value={formObj.email} placeholder="John Doe" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={formObj.email} placeholder="john@mail.com" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={formObj.password} placeholder="***************" />

          <label htmlFor="confirm">Confirmar Password</label>
          <input type="password" name="confirm" value={formObj.password} placeholder="***************" />

          <input type="submit" value="Registrame" />

          <Recover>
            <div>
              <input type="checkbox" name="remember" />
              <label htmlFor="remember">Al Crear una Cuenta Acepto los terminos y condiciones de Uso</label>
            </div>
          </Recover>


          <NewAcc>
            <h3>Ya tiene  Cuenta?</h3>
            <Link to="/singin">Entrar con mi Cuenta</Link>
          </NewAcc>

        </Form>

        <Bg>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            infinite
            autoPlayInterval={1000}
            animationDuration={1000}
            responsive={responsive}
            disableButtonsControls={true}
          />
        </Bg>
      </Main>
      <Footer />
    </>
  );
}

export default SingUp;  
