import { useContext } from 'react';
import {AuthUser} from '../context/authContext';
import {HeaderContainer, Logo, Titulo, TituloSub, Menu, Singin, NavUl} from '../Ui/headerStyles';
import { Link, useHistory } from 'react-router-dom';
import logo from '../img/header/logo.svg';




const Header = () => {

    const history = useHistory();
    
    const { authenticated, singOutFire } = useContext(AuthUser);

    const { user } = authenticated;

    console.log(user);

    

    return (
        <HeaderContainer>
            <Logo>
                <Link to='/'><img src={logo} alt="logo" /></Link>
                <Link to='/'><Titulo>Local<TituloSub>sito</TituloSub></Titulo></Link>
            </Logo>

            <Menu>
                <NavUl>
                    
                    <li><Link to="howitworks">Como funciona?</Link></li>
                    {user ? null : <li><Link to='/singup'>Registrar mi Local</Link></li>}
                    {user ? <Singin type="buttom" onClick={() => singOutFire()} >Cerrar Seccion</Singin> : null}
                    {user ? <p>Hola, {user.displayName}</p> : <Singin><Link to='/singin'>Ingresar</Link></Singin>}
                </NavUl>
            </Menu>
        </HeaderContainer>
    );
}

export default Header;