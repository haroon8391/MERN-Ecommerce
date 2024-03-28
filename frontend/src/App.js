import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AllProducts from './Components/AllProducts';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';
import Success from './Components/Payment/Success';
import Error from "./Components/Payment/Error"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Hero />}></Route>
          <Route path='/products' element={<AllProducts />}></Route>
          <Route path='/products/:id' element={<ProductDetails />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/success' element={<Success />}></Route>
          <Route path='/cancel' element={<Error />}></Route>
        </Route>
        <Route path='/api/auth/login' element={<Login />}></Route>
        <Route path='/api/auth/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
