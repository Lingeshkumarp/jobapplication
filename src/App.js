import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Homepage from './Homepage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/homepage' element={<Homepage/>}></Route>
      {/* <Route path='/cart' element={<Cart/>}></Route> 
      <Route path='/payment' element={<Payment/>}></Route>
      <Route path='/final' element={<Final/>}></Route> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
