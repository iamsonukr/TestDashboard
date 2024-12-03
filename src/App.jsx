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
