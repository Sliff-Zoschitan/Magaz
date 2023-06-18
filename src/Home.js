import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button, ListGroup } from 'react-bootstrap';
import Product from './Product'


function Home(props) {
    
    return (
        <div className="Home">
            <Container>
                <h1 style={{ textAlign: 'center' }}>Рекомендуемые товары</h1>
            </Container>
            <ListGroup horizontal className="justify-content-center" style={{ marginRight: '25px', marginLeft: '25px', marginTop: '50px' }}>
                <Product func ={props.func}></Product>
                <Product func={props.func}></Product>
                <Product func={props.func}></Product>
                <Product func={props.func}></Product>

            </ListGroup>
            <ListGroup horizontal className="justify-content-center" style={{ marginRight: '25px', marginLeft: '25px', marginTop: '25px' }}>
                <Product func={props.func}></Product>
                <Product func={props.func}></Product>
                <Product func={props.func}></Product>
                <Product func={props.func}></Product>

            </ListGroup>
            
        </div>
    );
}

export default Home;