import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./layout/Home";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Aboutcompany from "./components/Aboutcompany";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Specificproject from "./components/Specificproject";
import SplashScreen from "./components/SplashScreen";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./components/Projects";
import Thankyou from "./components/Thankyou";

const AppContent = () => {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);
  const [splashDone, setSplashDone] = useState(false);
  
  useEffect(() => {
    if (location.pathname === "/") {
      setShowSplash(true);
    } else {
      setSplashDone(true);
    }
  }, [location.pathname]);

  return (
    <>
      <div>
        {showSplash && (
          <SplashScreen
            onComplete={() => {
              setShowSplash(false);
              setSplashDone(true);
            }}
          />
        )}
      </div>

      {splashDone && (
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/AboutUs" element={<Aboutcompany />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:title" element={<Specificproject />} />
           <Route path="/thank-you" element={<Thankyou />} />
        </Routes>
      )}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
