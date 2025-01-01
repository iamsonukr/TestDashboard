import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/Routes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    
      <AppRoutes />
      <Toaster />

    </>
  );
}

export default App;
