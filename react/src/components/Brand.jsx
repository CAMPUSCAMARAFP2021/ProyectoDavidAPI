import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Brand = ({ brand, onDelete}) =>  
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>{brand.name}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

    
export default Brand;