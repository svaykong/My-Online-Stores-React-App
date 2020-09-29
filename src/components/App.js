import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';
import NavbarPage from './layouts/NavbarPage';
import EcommercePage from './EcommercePage';
import FooterPage from './layouts/FooterPage';

function App() {
  return (
    <div>
      <NavbarPage />
      <MDBContainer className='text-center mt-5 pt-5'>
        <Router>
          <Switch>
            <Route exact path='/' component={EcommercePage} />
            <Route exact path='/home' component={EcommercePage} />
            <Route
              exact
              path='*'
              component={() => <h1>404 Page Not Found!</h1>}
            />
          </Switch>
        </Router>
      </MDBContainer>
      <FooterPage />
    </div>
  );
}

export default App;
