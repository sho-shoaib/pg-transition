import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Place from "./Pages/Place";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path='/pg-transition/' element={<Home />} />
          <Route path='/pg-transition/page' element={<Place />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
