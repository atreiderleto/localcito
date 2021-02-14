import React from 'react';
import styled from '@emotion/styled';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import foto1 from '../img/carousel/foto1.png';
import foto2 from '../img/carousel/foto2.png';
import foto3 from '../img/carousel/foto3.png';


//styles components

const SubTitle = styled.h3 `
    font-size: 35px;
    color: #1B2B71;
    margin: 10px 0px 10px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
`;

const InfoContainer = styled.div`
    display:flex;
    width: 84%;
    margin-top: 10px;
    span {
        color: #A0A3BD;
    }
`;

const Info = styled.div`
    width: 100%;
`;

const Locale = styled.button`
    width: 24%;
    height: 30px;
    padding: 5px;
    background-color: #FFD23F;
    transition: ease 300ms;
    border: none;
    border-radius: 10px;
    text-align: center;
    a {
        text-decoration: none;
        padding: 10px;
    }

    &:hover {
        background-color: #1B2B71;
        border-radius: 10px;
        color: #FFD23F;  
    }
`;


//carousel show elemenets by width
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <img src={foto1} />
        <InfoContainer>
            <Info>
                <h3>Checho’s Grill</h3>
                <span>Washinton, DC</span>
            </Info>
            <Locale>
                Restaurant
            </Locale>
        </InfoContainer>
    </div>,
    <div className="item" data-value="1">
        <img src={foto2} />
        <InfoContainer>
            <Info>
                <h3>Checho’s Grill</h3>
                <span>Washinton, DC</span>
            </Info>
            <Locale>
                Restaurant
        </Locale>
        </InfoContainer>
    </div>,

    <div className="item" data-value="1">
        <img src={foto3} />
        <InfoContainer>
            <Info>
                <h3>Checho’s Grill</h3>
                <span>Washinton, DC</span>
            </Info>
            <Locale>
                Restaurant
            </Locale>
        </InfoContainer>
    </div>,

    <div className="item" data-value="1">
        <img src={foto1} />
        <InfoContainer>
            <Info>
                <h3>Checho’s Grill</h3>
                <span>Washinton, DC</span>
            </Info>
            <Locale>
                Restaurant
    </Locale>
        </InfoContainer>
    </div>,

    <div className="item" data-value="1">
        <img src={foto2} />
        <InfoContainer>
            <Info>
                <h3>Checho’s Grill</h3>
                <span>Washinton, DC</span>
            </Info>
            <Locale>
                Restaurant
            </Locale>
        </InfoContainer>
    </div>,

    <div className="item" data-value="1">
        <img src={foto3} />
        <InfoContainer>
            <Info>
                <h3>Checho’s Grill</h3>
                <span>Washinton, DC</span>
            </Info>
            <Locale>
                Restaurant
    </Locale>
        </InfoContainer>
    </div>,
];

const Carousel = () => (
    <>
        <SubTitle>Nuevos Localsitos</SubTitle>
        <Container>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                autoPlay
                infinite
                autoPlayInterval={1000}
                animationDuration={1000}
                animationType="fadeout"
                touchTracking={true}
                disableDotsControls={true}
            />
        </Container>
    </>
);


export default Carousel;