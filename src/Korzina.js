import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Image, ListGroup, Container, Button } from 'react-bootstrap';
import Product from './Product'

function Korzina() {
    return (
        <div className="Korzina">
            <Container>
                <h1 style={{ textAlign: 'center' }}>Корзина</h1>
            </Container>
            <ListGroup style={{ marginRight: '50px', marginLeft: '100px', width: '50%' }}>
                <ListGroup.Item className="d-flex justify-content-left">
                    <Image style={{ width: '50px' }} src="https://ae04.alicdn.com/kf/Sc8fb944db01640aca855d29e569f71eeb.jpg_480x480.jpg" />
                    <div style={{marginLeft: '20px'}}>Резиновая уточка</div>
                    <div style={{ marginLeft: '20px' }}>200р</div>
                    <Button style={{ marginLeft:'60%'}}>Удалить</Button>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-left">
                    <Image style={{ width: '50px' }} src="https://ae04.alicdn.com/kf/Sc8fb944db01640aca855d29e569f71eeb.jpg_480x480.jpg" />
                    <div style={{ marginLeft: '20px' }}>Резиновая уточка</div>
                    <div style={{ marginLeft: '20px' }}>200р</div>
                    <Button style={{ marginLeft: '60%' }}>Удалить</Button>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-left">
                    <Image style={{ width: '50px' }} src="https://ae04.alicdn.com/kf/Sc8fb944db01640aca855d29e569f71eeb.jpg_480x480.jpg" />
                    <div style={{ marginLeft: '20px' }}>Резиновая уточка</div>
                    <div style={{ marginLeft: '20px' }}>200р</div>
                    <Button style={{ marginLeft: '60%' }}>Удалить</Button>
                </ListGroup.Item>
            </ListGroup>
            <Button style={{marginLeft:'100px', marginTop:'20px'}}>Заказать</Button>
            




        </div>
    );
}

export default Korzina;