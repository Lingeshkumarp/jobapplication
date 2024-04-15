import './App.css';
import Signup from './Signup';
import Login from './Login';
import Homepage from './Homepage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route> 
      <Route path='/homepage' element={<Homepage/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
