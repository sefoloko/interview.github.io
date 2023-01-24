import React, {useState} from 'react';
import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/hero"
import Content from "./components/content"
import Form from "./components/form"

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  let [toggle, setToggle] = useState(true)

  return (
    <div className="App">
      <Container fluid>
        <div className="d-flex flex-sm-row flex-column">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Hero></Hero>

          <Button
            onClick={() => setToggle(!toggle)}
            aria-controls="example-collapse-text"
            aria-expanded={toggle}
          >
            Click
          </Button>

          <Collapse in={toggle}>
            <div id='example-collapse-text'>
            <Content></Content>
            </div>
          </Collapse>
          
          <Collapse in={!toggle}>
            <div id='example-collapse-text'>
              <Form></Form>    
            </div>

          
          </Collapse>
        </div>
      </Container>
    </div>
  );
}

export default App;
