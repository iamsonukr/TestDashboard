import "bootstrap/dist/css/bootstrap.min.css";
// import Landing from './pages/landing';
// import CartDetails from './components/CartDetails'
// import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header'
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <>
      <AppRoutes />
      {/* <Routes>
        <Route path='/' element={<Landing/> } />
        <Route path='/Cart' element={<CartDetails />} />
      </Routes> */}
      <Toaster />
    </>
  );
}

export default App;
