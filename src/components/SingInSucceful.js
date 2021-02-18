import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { NewAcc } from '../Ui/singupStyles';
import check from '../img/singup/check.svg';
import logo from '../img/header/logo.svg';


const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
        width: 20%;
    }

    p {
        margin-top: 2rem;
        text-align: center;
        font-size: 2.5rem;
        color: #FFD23F;
        font-weight: bold;
    }

    a {
        text-decoration: none;
    }
`;

const SingInSucceful = () => {

    return (
        

        <Container>
            <img src={logo} alt="logo"/>

            <NewAcc>
                <img src={check} alt="check" />
                <p>Su Cuenta ha sido creada con Exito !!!</p>
                <Link to='/singin'>Haga Click aqui para Ingresar</Link>
            </NewAcc>

        </Container>
    );
}

export default SingInSucceful;