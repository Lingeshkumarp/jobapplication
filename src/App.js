import './App.css';
import Signup from './Signup';
import Login from './Login';
import Homepage1 from './Homepage1';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route> 
      <Route path='/homepage' element={<Homepage1/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <Homepage1/> */}
    </div>
  );
}

export default App;
