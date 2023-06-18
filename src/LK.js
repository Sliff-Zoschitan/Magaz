import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Image, ListGroup, Container, Button, Card } from 'react-bootstrap';
import Product from './Product'

function LK() {
    return (
        <div className="LK">
            <Container>
                <h1 style={{ textAlign: 'center' }}>Личный кабинет</h1>
            </Container>
            
            
            

            <Container>
                <Alert variant='success' style={{ width: '300px' }}>
                    Накопленые баллы: 30
                </Alert>
                <h2 >Ваши заказы</h2>
                <Card>
                    <Card.Header>Заказ от 15.06.23</Card.Header>
                    <Card.Body>
                        <Card.Title>400р</Card.Title>
                        <Card.Text>
                            Доставлено
                        </Card.Text>
                        <Card.Img variant="top" src="https://ae04.alicdn.com/kf/Sc8fb944db01640aca855d29e569f71eeb.jpg_480x480.jpg" style={{ width: '50px' }} />
                        <Card.Img variant="top" src="https://ae04.alicdn.com/kf/Sc8fb944db01640aca855d29e569f71eeb.jpg_480x480.jpg" style={{ width: '50px' }} />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Заказ от 15.06.23</Card.Header>
                    <Card.Body>
                        <Card.Title>600р</Card.Title>
                        <Card.Text>
                            Доставлено
                        </Card.Text>
                        <Card.Img variant="top" src="https://ae04.alicdn.com/kf/Sc8fb944db01640aca855d29e569f71eeb.jpg_480x480.jpg" style={{ width: '50px' }} />
                        <Card.Img variant="top" src="https://ae04.alicdn.com/kf/Sc8fb944db01640aca855d29e569f71eeb.jpg_480x480.jpg" style={{ width: '50px' }} />
                        <Card.Img variant="top" src="https://ae04.alicdn.com/kf/Sc8fb944db01640aca855d29e569f71eeb.jpg_480x480.jpg" style={{ width: '50px' }} />
                    </Card.Body>
                </Card>
            </Container>

        </div>
    );
}

export default LK;