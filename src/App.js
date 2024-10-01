import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "../src/Pages/Main"
import { Footer } from './Components/Footer';
import { Home } from './Pages/Home';
import About from './Pages/About';
import Fleet from './Pages/Fleet';
import Fares from './Pages/Fares';
import Booking from './Pages/Booking';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} >
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="fleet" element={<Fleet />} />
            <Route path="fares" element={<Fares />} />
            <Route path="booking" element={<Booking />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
