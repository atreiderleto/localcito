import styled from '@emotion/styled';

import placeholder from '../img/header/placerholderprofilel.jpg';
import arrowDownBlue from '../img/header/arrowDownBlue.svg';
import { useContext, useState } from 'react';
import DropDown from './DropDown';
import { AuthUser } from '../context/authContext';

const Container= styled.div`
    display: flex;
    background-color: #f7f7fc;
    padding: 10px;
    border-radius: 10px;
    position: relative;

    img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
    }

    small {
        align-self: center;
        padding: 5px;
    }

    .arrow{
        width: 20px;
        height: 20px;
        align-self: center;
    }
`;


const Avatar = () => {
    
     const { authenticated } = useContext(AuthUser)

    const [open, setOpen] = useState(false);

    const handleDrop = () => {
        
       setOpen(!open);
    }


    return ( 
        <Container>
            <img src={placeholder} alt='avatar'/>
            <small>Hola, {authenticated.user.displayName}</small>
            <img onClick={handleDrop} className='arrow' src={arrowDownBlue} alt='arrow'/>
            {open && <DropDown/>}
        </Container>
     );
}
 
export default Avatar;