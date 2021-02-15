import styled from '@emotion/styled';

const FooterInfo = styled.footer`
    margin-top: 30px;
    text-align: center;
    color: #CCCCCC;

    @media (max-width: 1240px) {
        margin-top: 60px;
    }

    @media (max-width: 414px) {
        margin-bottom: 30px;
    }
`;


const Footer = () => {

    const year = new Date().getFullYear();
  
    return (
        <FooterInfo>
          {year}  &copy;Locasito all rights reserved
        </FooterInfo>
    );
}

export default Footer;