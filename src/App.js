import "./App.css";
import { LeftSidebar } from "./components/LeftSidebar";
import  SideBarRight  from './components/SideBarRight'
import Container from 'react-bootstrap/Container'
import  Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

function App() {
  return (
    <div className="App">
      <header className="App-header">DevTo</header>
      <Container>

        <Row className="justify-content-md-center">

        <Col sm lg ={3}>  <LeftSidebar/>  </Col>
        <Col sm lg ={6}>  <div>sadsadsa</div>  </Col>
        <Col sm lg ={3}>  <SideBarRight/>  </Col>

        </Row>

      </Container>


      

    </div>
  );
}

export default App;
