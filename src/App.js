import logo from './logo.svg';
import './App.css';
import { Button, Rating } from '@mui/material';
import Newspaper from './Components/Newspaper/Newspaper';

function App() {
  return (
    <div className="App">
      <Button variant="contained">My first Button</Button>
      <Rating name="read-only" value={4} readOnly/>
      <Newspaper></Newspaper>
    </div>
  );
}

export default App;
