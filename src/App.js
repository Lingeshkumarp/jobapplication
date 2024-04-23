import './App.css';
import Signup from './Signup';
import Login from './Login';
import Homepage1 from './Homepage1';
import Profile from './Profile';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route> 
      <Route path='/homepage' element={<Homepage1/>}></Route>
      {/* <Route path='/profile' element={<Profile/>}></Route> */}
    </Routes>
    </BrowserRouter>
    {/* <Profile/> */}
    </div>
  );
}

export default App;
