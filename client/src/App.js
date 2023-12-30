import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Landing from './views/landing/Landing';
import Form from './views/create/Form';
import NavBar from './components/NavBar/NavBar';

import {Route, Routes, useLocation} from "react-router-dom";

import './App.css';
import NotFound from './views/error/notFound';


function App() {

  const location= useLocation();
  return (
    <div>

     {location.pathname !== '/' && <NavBar />}

      <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route path="/home/:id" element={<Detail/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path= '/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
