import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Meet = ({ meet, onDelete}) =>  
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>{meet.date}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

    
export default Meet;