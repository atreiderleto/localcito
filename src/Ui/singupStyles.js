import styled from '@emotion/styled';
import bg from '../img/singup/bg1.png'

export const Main = styled.main`
display: flex;
justify-content: space-between;
padding: 30px;

a {
  text-decoration: none;
}

@media (max-width: 1240px) {
  padding: 10px;
}

@media (max-width: 1024px) {
  margin-top: 40px;
}
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 50px;
`;


export const Titulo = styled.h1`
  margin: 0px 0px 0px 10px;
  font-size: 25px;
  color: #1B2B71;
  
`;

export const TituloSub = styled.span`
  color: #FFD23F;
  
`;

export const Bg = styled.div`
display: flex;
flex-flow: row wrap;
background-image: url(${bg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 60%;
height: 800px;
padding: 20px;
border-radius: 30px;

  .alice-carousel__stage-item * {
      margin-left: 115px !important;
  }

  h3 {
    width: 59%;
    margin-top: 20px;
    color: #FFFFFF;
    text-align: center;
  }

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 40px;
    text-align: center;
  }

  @media (max-width: 1024px) {
    display: none;
  }

`;

export const Form = styled.form`
display: flex;
flex-flow: column wrap;
justify-content:center;
align-items: center;
width: 36%;
color: #1B2B71;

@media (max-width: 1024px) {
  width: 100%;
}



img {
  width: 100%;
}

label {
  width: 70%;
  margin-top: 30px;

  @media (max-width: 1240px) {
    width: 90%;
}
}

input[type=email],
input[type=password],
input[type=text] {
  width: 70%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #1B2B71;
  margin-top: 5px;
  padding-left: 10px;
  color: #1B2B71;
  font-size: 18px; 

  @media (max-width: 1024px) {
    width: 90%;
  }
}

input[type=submit] {
  width: 72%;
  height: 50px;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 16px;
  background-color: #FFD23F;
  border: none;
  cursor: pointer;

  :hover {
    color: #FFD23F;
    background-color: #3253E3
  }

  @media (max-width: 1024px) {
    width: 92%;
  }
  
}

`;

export const Recover = styled.div` 
display: flex;
flex-direction: column wrap;
justify-content: space-between;
align-items: center;
width: 72%;
margin-top: 30px;

label {
  margin-left: 10px;
}

a { 
  width: 50%;
  text-align: right;
}

@media (max-width: 1024px) {
    width: 92%;
  }
`;

export const NewAcc = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 100px;

a {
  width: 72%;
  height: 40px;
  border-radius: 10px;
  margin-top: 30px;
  padding-top: 20px;
  font-size: 16px;
  border: 1px solid #3253E3; 
  text-align:center;
  color: #3253E3;

  :hover {
    color: #FFD23F;
    background-color: #3253E3
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

}
`;