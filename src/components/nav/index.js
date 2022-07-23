
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navegacion() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src='../public/img/logoLibro.png' />
                    Alto Libro</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Promociones</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                        <NavDropdown title="Categorias destacadas" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Romance</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Ficcion
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Juvenil</NavDropdown.Item>
                            <NavDropdown.Divider />

                        </NavDropdown>
                    </Nav>
                    <Nav>

                        <Nav.Link eventKey={2} href="#memes">
                            <img src="/public/img/carrito.png" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

