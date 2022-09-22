import './css/App.css';
import Router from './components/Router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" bg="dark" variant="dark" fixed="top">
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
          <Nav.Link as={Link} to="/games">About Us</Nav.Link>
          <Nav.Link as={Link} to="/games">Game Servers</Nav.Link>
        </Container>
      </Navbar>
      <div className='Content-wrap'>
        <Router/>{/* Where routes are defined*/}
        <Outlet/>{/* Where routes are rendered*/}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
