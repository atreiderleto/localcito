import logo from '../img/header/logo.svg'
import styled from '@emotion/styled';

const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    justify-items: flex-start;
    padding: 10px;
    margin-bottom: 15px;
`;

const Logo = styled.div `
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`;

const Titulo = styled.h1 `
    margin: 0px 0px 0px 10px;
    font-size: 25px;
    color: #1B2B71;
`;

const TituloSub = styled.span`
    color: #FFD23F;
`;

const Menu =  styled.nav `
    width: 26%;
`;

const NavUl = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    li{
        list-style: none;
        border-radius: 10px;
        

        a {
            text-decoration: none;
            color: #1B2B71;
        }
    }
`;

const Singin = styled.li `
    padding: 10px;
    background-color: #FFD23F;
    transition: ease 300ms;


    a {
        text-decoration: none;
        padding: 10px;
    }

    &:hover {
        background-color: #1B2B71;
        border-radius: 10px;

        a {
            color: #FFD23F;
        }
    }
`;
    


const Header = () => {
    return (
        <HeaderContainer>
            <Logo>
                <img src={logo} alt="logo" />
                <Titulo>Local<TituloSub>sito</TituloSub></Titulo>
            </Logo>

            <Menu>
                <NavUl>
                    <li><a href="#">Como funciona?</a></li>
                    <li><a href="#">Registrar mi Local</a></li>
                    <Singin><a href="#">Ingresar</a></Singin>
                </NavUl>
            </Menu>
        </HeaderContainer>
    );
}

export default Header;