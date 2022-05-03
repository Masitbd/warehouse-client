import logo from './logo.svg';
import './App.css';
import Header from './components/Heder/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './Register/Register';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
