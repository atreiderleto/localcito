import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    justify-items: flex-start;
    padding: 10px;
    margin-bottom: 15px;

    a {
        text-decoration: none;
    }


    @media (max-width: 1024px) {
        margin-top: 30px;
        padding: 0px;
    }

    @media (max-width: 414px) {
        padding: 10px;
    }

`;

export const Logo = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 20%;
`;

export const Titulo = styled.h1`
    margin: 0px 0px 0px 10px;
    font-size: 25px;
    color: #1B2B71;
    
`;

export const TituloSub = styled.span`
    color: #FFD23F;
    
`;

export const Menu = styled.nav`
    width: 26%;

    @media (max-width: 1240px) {
        width: 40%;
    }

    @media (max-width: 1024px) {
        width: 50%;
    }

    @media (max-width: 834px) {
        width: 55%;
    }

    @media (max-width: 320px) {
        width: 48%;
    }
`;

export const NavUl = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 414px) {
        justify-content: flex-end;

        li:nth-of-type(1) {
            display: none;
        }

        li:nth-of-type(2) {
            display: none;
        }
    }


    li{
        list-style: none;
        border-radius: 10px;
        margin-right: 20px;

        a {
            color: #1B2B71;
        }
    }

`;

export const Singin = styled.li`
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

