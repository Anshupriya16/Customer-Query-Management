import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './mainapp/Home';
import About from './mainapp/About';
import Registration from './mainapp/Registration';
import Login from './mainapp/Login';
import Adlogin from './mainapp/Adlogin';
import Dash from './userapp/Dash';
import AddQuery from './userapp/AddQuery';
import ViewPenQuery from './userapp/ViewPenQuery';
import Addash from './adminapp/Addash';
import Viewalluser from './adminapp/Viewalluser';
import Viewallpenquery from './adminapp/Viewallpenquery';
import Viewallproquery from './adminapp/Viewallproquery';
import Viewallcomquery from './adminapp/Viewallcomquery';
import Carrer from './mainapp/Carrer';
import Service from './mainapp/Service';
import Product from './mainapp/Product';
import ViewComQuery from './userapp/ViewComQuery';
import ViewProQuery from './userapp/ViewProQuery';

function App() {
  return (
    <>
    <div className='container-fluid'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/product' element={<Product />} />
      <Route path='/carrer' element={<Carrer />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/adlogin' element={<Adlogin />} />
      <Route path='/userdash/:id' element={<Dash />} />
      <Route path='/addquery/:id' element={<AddQuery/>} />
      <Route path='/viewPenQuery/:id' element={<ViewPenQuery/>} />
      <Route path='/viewProQuery/:id' element={<ViewProQuery/>} />
      <Route path='/viewComQuery/:id' element={<ViewComQuery/>} />
      <Route path='/addash' element={<Addash/>} />
      <Route path='/viewalluser' element={<Viewalluser/>} />
      <Route path='/viewallpenquery' element={<Viewallpenquery/>} />
      <Route path='/viewallproquery' element={<Viewallproquery/>} />
      <Route path='/viewallcomquery' element={<Viewallcomquery/>} />
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
