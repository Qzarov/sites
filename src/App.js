import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world</h1>
    //     <Button variant='primary'>Clict it now!</Button>
    //   </header>
    // </div>
  );
}

export default App;
