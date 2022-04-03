import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import DashBoard from './Components/Dashboard/DashBoard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import RiviewHome from './Components/ReviewHome/RiviewHome';
import Riview from './Components/Riview/Riview';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
  <Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/" element={<RiviewHome></RiviewHome>}></Route>
<Route path="/riview" element={<Riview></Riview> }></Route>
<Route path="/dashboard" element={<DashBoard></DashBoard> }></Route>
<Route path="/about" element={<About></About>}></Route>
<Route path="*" element={ <NotFound></NotFound> }></Route>

  </Routes>
    </div>
  );
}

export default App;
