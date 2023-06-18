import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Form, NavDropdown, Container, Badge } from 'react-bootstrap';
import React, {useState} from 'react';


function Header(props) {
    
    return (
        <div className="Header">
            <Navbar bg="dark" >
                <Container>
                    <Navbar.Brand href="/" style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '30px' }}>
                        <img
                            src="https://free-png.ru/wp-content/uploads/2021/11/free-png.ru-419.png"
                            width="70"
                            height=""
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
                
                <Container style={{ display: 'block', marginLeft: '15%', marginRight: '15%' }}>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Искать товар"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button >Поиск</Button>
                    </Form>
                    
                </Container>
                <Container style={{marginRight: '30px', color: 'white' }}>
                    <NavDropdown title="Каталог" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/ducks">Утки</NavDropdown.Item>
                        <NavDropdown.Item href="/ducks">Утки</NavDropdown.Item>
                        <NavDropdown.Item href="/ducks">Утки</NavDropdown.Item>
                        <NavDropdown.Item href="/ducks">Утки</NavDropdown.Item>
                        <NavDropdown.Item href="/ducks">Утки</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/lk" >ЛК</Nav.Link>
                    <Nav.Link href="/korzina" >
                        Корзина 
                        <Badge bg="primary" pill>
                            {props.p}
                        </Badge>
                    </Nav.Link>
                    
                </Container>
                    
                    


                
            </Navbar>
        </div>
    );
}

export default Header;