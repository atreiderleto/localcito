import { useContext, useState } from 'react';
import { AuthUser } from '../context/authContext';
import { Link } from 'react-router-dom';
import { Main, Logo, Titulo, TituloSub, Bg, Form, Recover, NewAcc } from '../Ui/singInStyles';
import logo from '../img/header/logo.svg'
import Footer from './Footer';
import Error from './Error';


// Component Logic
const SingIn = () => {

  const { authentication, setAuthentication, authenticatedUser  } = useContext(AuthUser)

  const [error, setError] = useState('');
  const {email, password } = authentication;

  const hadleChange = e => {
    e.preventDefault();
    
    setAuthentication({
      ...authentication,
      [e.target.name] : e.target.value
    })
  }

  //Validation 

  const handleValidation = e => {
    e.preventDefault();

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
      setError('Correo Invalido')
      return;
    }

    if(password === ''){
      setError('La Contraseña no puede esta Vacia');
      return;
    }

    authenticatedUser(authentication);

  }

  return (
    <>
      <Main>
        <Form
          onSubmit={handleValidation}
        >
          <Logo>
            <Link to='/'><img src={logo} alt="logo" /></Link>
            <Link to='/'><Titulo>Local<TituloSub>sito</TituloSub></Titulo></Link>
          </Logo>

          {error ? <Error error={error}/> : null}

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email"
            value={email}
            onChange={hadleChange}
            placeholder="ejemplo@ejemplo.com" 
          />

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password"
            value={password}
            onChange={hadleChange}
          />

         <input type="submit" value="Ingresar" />

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
      <Footer />
    </>
  );
}

export default SingIn;  
