import './App.css';
import Main from './Main';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/games">Games</Nav.Link>
        </Container>
      </Navbar>
      <Main />{/* Where routes are defiend*/}
      <Outlet/>{/* Where routes are rendered*/}
    </div>
  );
}

export default App;
