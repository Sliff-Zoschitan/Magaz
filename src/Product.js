import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Card } from 'react-bootstrap';

function Product(props) {
    return (
        <div className="Product" style={{ marginRight: '25px', marginLeft: '25px' }}>
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://ae04.alicdn.com/kf/Sc8fb944db01640aca855d29e569f71eeb.jpg_480x480.jpg" />
                <Card.Body>
                    <Card.Title>200р</Card.Title>
                    <Card.Text>
                        Резиновая уточка
                    </Card.Text>
                    <Button variant="primary" onClick={props.func}>В корзину</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Product;