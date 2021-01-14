import React, {Component,Fragment} from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Detailpokemon from "./DetailPokemon";
import {Container, Navbar, Row, Col} from 'react-bootstrap';

class App extends Component {
   
  render(){
    return (    
      <Container>
      <Row>
      <Col xs={12} md={12}>          
      <Navbar bg="success" variant="dark">
        <Navbar.Brand>Tokopedia-Pokemon</Navbar.Brand>
     </Navbar>
     <br />      
    </Col>
    </Row>     
    <Row>
    <Col xs={12} md={12}> 
      <Fragment>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/detailpokemon/:id">
          <Detailpokemon />
        </Route>
        
      </Switch>
    </Fragment>
    </Col>
         </Row>
          </Container>
    );
  }
}

 
export default App;
