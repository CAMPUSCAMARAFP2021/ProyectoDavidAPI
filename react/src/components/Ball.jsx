import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Ball = ({ball, onDelete}) =>  
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>{ball.kind}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

    
export default Ball;