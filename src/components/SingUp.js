
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Main, Logo, Titulo, TituloSub, Bg, Form, Recover, NewAcc } from '../Ui/singupStyles';
import fire from '../config/Fire';
import 'firebase/auth';
import 'react-alice-carousel/lib/alice-carousel.css';
import logo from '../img/header/logo.svg';

import AliceCarousel from 'react-alice-carousel';
import Footer from './Footer';
import Error from './Error';
import '../css/singup.css';

//carouse picture this is Static
import foto1 from '../img/carousel/foto1.png';
import foto2 from '../img/carousel/foto2.png';
import foto3 from '../img/carousel/foto3.png';


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

  //component states
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: 'off'
  });

  const [error, setError] = useState('');

  const history = useHistory();

  const handleData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  //Validation & user Registration in Firebase 
  const handleSubmit = e => {
    e.preventDefault();

    const { username, email, password, confirmPassword, terms } = data;

    if (username === '') {
      setError('El Nombre es Obligatorio');
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
      setError('Ingrese un Email Valido');
      return;
    }

    if (password.length < 6) {
      setError('Las Contraseña requiere minimo 6 Caracteres');
      return;
    }

    if (password != confirmPassword) {
      setError('Las Contraseñas no Coinciden');
      return;
    }

    if (terms != 'on') {
      setError('Debe Aceptar los Terminos y  Condiciones');
      return;
    }

    async function registerUser(data) {

      try {

        const { email, password, username } = data;
        const addUser = await fire.auth().createUserWithEmailAndPassword(email, password);
        await addUser.user.updateProfile({
          displayName: username
        });

         return  history.push('/singinsucceful');

        

      } catch (error) {
        if (error.message === 'The email address is already in use by another account.') {
          setError('El Email ya esta siendo usado por otra cuenta');
        }
      }
    }

    registerUser(data);  
  }

  return (
    <>
      <Main>
        <Form
          onSubmit={handleSubmit}
          noValidate
        >
          <Logo>
            <Link to='/'><img src={logo} alt="logo" /></Link>
            <Link to='/'><Titulo>Local<TituloSub>sito</TituloSub></Titulo></Link>
          </Logo>


          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="username"
            placeholder="John Doe"
            onChange={handleData}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@mail.com"
            onChange={handleData}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleData}
          />

          <label htmlFor="confirm">Confirmar Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleData}
          />

          <Recover>
            <div>
              <input
                type="checkbox"
                name="terms"
                onChange={handleData}
              />

              <label htmlFor="terms">Al Crear una Cuenta Acepto los terminos y condiciones de Uso</label>
            </div>
          </Recover>

          {error ? <Error error={error} /> : null}

          <input type="submit" value="Registrame" />

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
