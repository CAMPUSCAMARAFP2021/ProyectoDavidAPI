import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BallList from './components/BallList';
import PlayerList from './components/PlayerList';
import BrandList from './components/BrandList';
import MeetList from './components/MeetList';
import Container from 'react-bootstrap/Container';


function App() {
  return <Container className="p-3">
  <Container className="p-5 mb-4 bg-light rounded-3">
    
  <div class="row">
   <h1 className="header">Meet Organizer</h1>
</div>
<div class="h-divider">
</div>
<div class="row">
</div>

<div class="row">
   
    <h2> Create Player</h2>
    <PlayerList/>

    <h2> Create Ball</h2>
      <BallList/>
      <h2> Create Meet</h2>
      <MeetList/>
      <h2> Create Brand</h2>
      <BrandList/>
</div>


  </Container>
  
</Container> 

}


export default App;