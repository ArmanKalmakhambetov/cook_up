import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";

import "./assets/css/style.css";

function App() {
  
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div>
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;