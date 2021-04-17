
import buscar from '../img/search/buscar.svg';

import {
    Container,
    ContainerSearch,
    SearchBtn,  
    Select,
    SelectContainer,
    Titulo,
}from '../Ui/searchStyles';

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