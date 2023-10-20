import './App.css';
import {Route,Routes} from 'react-router-dom'
import Register from './components/Register/Register';
import OtpPage from './components/OtpPage/OtpPage';
import HomePage from './components/Homepage/HomePage';
import MealsMenu from './components/MealsMenu/MealsMenu';


function App() {
  return (
   
    <Routes>
      <Route path='/' element={<Register/>} ></Route>
      <Route path='/authpage' element={<OtpPage/>}></Route>
      <Route path='/homepage' element={<HomePage/>}></Route>
      <Route path='/homepage/:restaurant_id' element={<MealsMenu/>}></Route>
    </Routes>
    
  );
}

export default App;
