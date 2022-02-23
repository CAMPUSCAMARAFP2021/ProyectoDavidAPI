import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BallList from './components/BallList';
import Container from 'react-bootstrap/Container';

function App() {
  return <Container className="p-3">
  <Container className="p-5 mb-4 bg-light rounded-3">
    <h1 className="header">Welcome To My Balls</h1>
      <BallList/>
  </Container>
</Container> 
}

export default App;