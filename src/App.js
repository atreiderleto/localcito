import Header from './components/Header';
import Search from './components/Search';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import styled from '@emotion/styled';


const Container = styled.div `
  padding: 0px 80px 0px 80px;
  margin-top: 20px;

  @media (max-width: 375px) {
    padding: 0px;
    margin-top: 0px;
  }
`;


function App() {
  return (
    <Container>
      <Header/>
      <Search/>
      <Carousel/>
      <Footer/>
    </Container>
  );
}

export default App;
