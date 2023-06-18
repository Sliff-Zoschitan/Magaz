import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, ListGroup, Container } from 'react-bootstrap';
import Product from './Product'

function Ducks(props) {
    return (
        <div className="Ducks">
            <Container>
                <h1 style={{ textAlign: 'center' }}>Утки</h1>
            </Container>
            <ListGroup horizontal className="justify-content-center" style={{ marginTop: '50px' }}>
                <Product func={props.func}></Product>
                <Product func={props.func}></Product>
                <Product func={props.func}></Product>
                <Product func={props.func}></Product>

            </ListGroup>
            
            
            
            
        </div>
    );
}

export default Ducks;