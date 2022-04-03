import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import DashBoard from './Components/Dashboard/DashBoard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Riview from './Components/Riview/Riview';

function App() {
  return (
    <div>
      <Header></Header>
  <Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/riview" element={<Riview></Riview> }></Route>
<Route path="/dashboard" element={<DashBoard></DashBoard> }></Route>
<Route path="/about" element={<About></About>}></Route>
  </Routes>
    </div>
  );
}

export default App;
