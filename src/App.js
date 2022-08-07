import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Appointment } from "./components/Homepage/Appointment/Appointment";
import { Homepage } from "./components/Homepage/Homepage";
import { Navbar } from "./components/Header/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Homepage/Contact/Contact";
import { Doctors } from "./components/Homepage/Doctors/Doctors";
import { Facilities } from "./components/Homepage/Facilities/Facilities";
import { Gallery } from "./components/Homepage/Gallery/Gallery";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
