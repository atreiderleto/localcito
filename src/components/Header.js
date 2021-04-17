import { useContext } from 'react';
import {AuthUser} from '../context/authContext';
import {HeaderContainer, Logo, Titulo, TituloSub, Menu, Singin, NavUl} from '../Ui/headerStyles';
import { Link, useHistory } from 'react-router-dom';
import logo from '../img/header/logo.svg';
import Avatar from './Avatar';




const Header = () => {

    const history = useHistory();
    
    const { authenticated } = useContext(AuthUser);

    const { user } = authenticated;

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
                    {user ? <Avatar /> : <Singin><Link to='/singin'>Ingresar</Link></Singin>}
                </NavUl>
            </Menu>
        </HeaderContainer>
    );
}

export default Header;