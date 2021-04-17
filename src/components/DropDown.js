import styled from "@emotion/styled";
import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthUser } from "../context/authContext";


const Container = styled.div`
    position: absolute;
    top: 70px;
    left: 0px;
    background-color: #f7f7fc;
    width: 84%;
    padding: 15px;
    border-radius: 10px;

    li {
        padding: 10px;
        border-radius: 10px;
        margin: 0;
        transition: all 300ms;
    }

    li:hover {
        background-color: #FFD23F;
    }

`;

const DropDown = () => {

    const { singOutFire } = useContext(AuthUser);

    return (  
        <Container>
            <ul>
                <li><Link to='/'>Mi Cuenta</Link></li>
                <li><Link onClick={() => singOutFire()} to='/'>Cerrar Seccion</Link></li>
            </ul>
        </Container>
    );
}
 
export default DropDown;
