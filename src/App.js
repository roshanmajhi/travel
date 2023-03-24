import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Scss/style.scss';
import Home from './Component/Home';
import Scrolltotop from './Component/Scrolltotop';
import { Route, Routes } from 'react-router-dom';
import Pages from './Component/Pages';
import Destination from './Component/Destination';
import Blogs from './Component/Blogs';
import Landing from './Component/Landing';
import Footer from './Component/Footer';
import Innerpage from './Component/Innerpage';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages' element={<Pages/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/innerpage' element={<Innerpage/>}/>
    </Routes>
     <Scrolltotop/>
     <Footer/>
    </>
  );
}

export default App;
