import Home from './components/Home';
import SingIn from './components/SingIn';
import SingUp from './components/SingUp';
import SingInSucceful from './components/SingInSucceful';
import HowItWorks from './components/HowItWorks';

import styled from '@emotion/styled';



//context auth 
import AuthProvider from './context/authContext';

//react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


//Styled Component
const Container = styled.div`
  padding: 0px 80px 0px 80px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    padding: 20px;
    margin-top: 0px;
  }

  @media (max-width: 1240px) {
    padding: 0px 20px 0px 20px;
  }

  @media (max-width: 414px) {
    padding: 0px;
    margin-top: 10px;
  }
`;


function App() {
  return (
    <Router>
      <AuthProvider>
      <Switch>
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/singin">
            <SingIn />
          </Route>
          <Route path="/singup">
            <SingUp/>
          </Route>
          <Route path="/howitworks">
            <HowItWorks />
          </Route>
          <Route path="/singinsucceful">
            <SingInSucceful />
          </Route>
        </Container>
      </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
