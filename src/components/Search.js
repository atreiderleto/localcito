import styled from '@emotion/styled';
import BgSearch from '../img/search/bgsearch.svg';
import ArrowDown from '../img/search/arrowdown.svg';
import buscar from '../img/search/buscar.svg';

const ContainerSearch = styled.div`
    background-image:  url(${BgSearch});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 0px;
    border-radius: 20px;

    @media (max-width: 414px) { 
        height: 300px;
        background-size: cover;
        padding: 30px;
        border-radius: 0px;
    }
`;

const Container = styled.div`
    padding: 60px;

    @media (max-width: 1240px) {
        padding: 40px;
    }

    @media (max-width: 414px) { 
        padding: 0px;
    }    
`;

const Titulo = styled.h2`
    width: 30%;
    font-size: 50px;
    color: #1B2B71;

    @media (max-width: 1240px) { 
        width: 50%;
    }

    @media (max-width: 1024px) { 
        width: 55%;
    }

    @media (max-width: 834px) { 
        width: 75%;
    }

    @media (max-width: 768px) { 
        font-size: 35px;
    }


    @media (max-width: 414px) { 
        display: none;
    }

`;

const SelectContainer = styled.div`
    margin-top: 20px;

    select:nth-of-type(2) {
        margin-left: 20px;

       }

        @media (max-width: 414px) { 
            margin-left: 0px;
            margin-top: 30px;

            select:nth-of-type(2) {
                margin-top: 30px;
                margin-left: 0px;

       }
        }

        
    } 
`;

const Select = styled.select`
  width: 20%;
  height: 50px;
  padding: 10px;
  color: #6E7191;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: #FFFFFF;
  box-shadow: none;
  background-image: url(${ArrowDown});
  background-repeat: no-repeat;
  background-position-x: 96%;
  background-position-y: center;

    ::after {
        content: '';
        color: #FFD23F;
        border-color: #FFD23F;
    }

    @media (max-width: 1240px) { 
         width: 30%;
    }

    @media (max-width: 414px) { 
        width: 100%;
        margin-left: 0px;
        margin-top: 20px;
    }
    
`;

const SearchBtn = styled.button`
    width: 10%;
    height: 50px;
    margin-left: 50px;
    padding: 10px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: #FFD23F;
    font-size: 18px;
    border-radius: 10px;

    img { 
        margin-left: 5px;
    }

    @media (max-width: 1240px) { 
         width: 15%;
    }

    @media (max-width: 834px) { 
        width: 18%;
    }

    @media (max-width: 768px) { 
        width: 20%;
    }

    @media (max-width: 414px) { 
        width: 100%;
        margin-left: 0px;
        margin-top: 50px;
    }
`;

const Search = () => {
    return (
        <ContainerSearch>
            <Container>
                <Titulo>
                    La guia a tu gente
                    en donde estés!
                </Titulo>
                <SelectContainer>
                    <Select>
                        <option>Que Buscas ?</option>
                    </Select>
                    <Select>
                        <option>Estado</option>
                    </Select>
                    <SearchBtn>
                        <span> Buscar</span>
                        <img src={buscar} />
                    </SearchBtn>
                </SelectContainer>
            </Container>
        </ContainerSearch>
    );
}

export default Search;