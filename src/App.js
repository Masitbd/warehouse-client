import logo from './logo.svg';
import './App.css';
import Header from './components/Heder/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './Register/Register';
import ItemDetails from './components/ItemDetails/ItemDetails';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import AddItem from './components/AddItem/AddItem';
import ManageItems from './components/ManageItems/ManageItems';

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
        <Route path='/itemdetails/:itemid'
        element={
          <RequireAuth>
            <ItemDetails />
          </RequireAuth>
        }
        />
         <Route path='/additem'
        element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }
        />
        <Route path='/manageitem'
        element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        }
        />
     <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
