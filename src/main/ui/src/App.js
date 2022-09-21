import './css/App.css';
import Main from './Main';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img
                src="/logo192.png"
                width="30"
                height="30"
                alt="Hosting Service Name"
            />
            Hosting Service Name
          </Navbar.Brand>
          <Nav.Link as={Link} to="/games">Games</Nav.Link>
        </Container>
      </Navbar>
      <Main />{/* Where routes are defiend*/}
      <Outlet/>{/* Where routes are rendered*/}
    </div>
  );
}

export default App;
