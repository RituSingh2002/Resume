import logo from './logo.svg';
import './App.css';
import './index.css';
import 'antd/dist/antd.css';
 import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
         <Route path='/'element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;