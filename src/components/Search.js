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
`;

const Container = styled.div`
    padding: 60px;
`;

const Titulo = styled.h2`
    width: 30%;
    font-size: 50px;
    color: #1B2B71;
`;

const SelectContainer = styled.div`
    margin-top: 20px;

    select:nth-of-type(2) {
        margin-left: 20px;
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