import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";

import { Homepage } from "./components/Homepage/Homepage";
import { NavbarLinks } from "./components/Header/Navbar/NavbarLinks";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Homepage/Contact/Contact";
import { Doctors } from "./components/Homepage/Doctors/Doctors";
import { Facilities } from "./components/Homepage/Facilities/Facilities";
import { Gallery } from "./components/Homepage/Gallery/Gallery";
import { AdminLogIn } from "./components/Admin/AdminLogIn";
import { Management } from "./components/Homepage/Management/Management";
import { Specialities } from "./components/Homepage/Specialities/Specialities";

import "./App.css";
import { PrivacyPolicy } from "./components/others/PrivacyPolicy";
import { RefundPolicy } from "./components/others/RefundPolicy";
import { AppointmentForm } from "./components/Layout/AppointmentForm";
import { DevInfo } from "./components/others/DevInfo";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Crimson+Text&family=Noto+Serif+JP:wght@200&display=swap');
</style>;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavbarLinks />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/adminlogin" element={<AdminLogIn />} />
          <Route path="/management" element={<Management />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/refundpolicy" element={<RefundPolicy />}></Route>
          <Route path="/appointment" element={<AppointmentForm />}></Route>
        </Routes>
        <Footer />
        <DevInfo />
      </BrowserRouter>
    </div>
  );
}

export default App;
