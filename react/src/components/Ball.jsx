import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Ball = ({ball, onDelete}) =>  
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>{ball.kind}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>


    // <div>
    //     <input type="checkbox"></input>
    //     <p className="title">{task.title}</p>
    //     <p className="author">{task.author}</p>
    //     <Button variant="primary" onClick={onDelete}>Eliminar</Button>
    // </div>

    
export default Ball;