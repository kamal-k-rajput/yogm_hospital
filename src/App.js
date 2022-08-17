import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header } from "./components/Header/Header";
import { Appointment } from "./components/Homepage/Appointment/Appointment";
import { Homepage } from "./components/Homepage/Homepage";
import { NavbarLinks } from "./components/Header/Navbar/NavbarLinks";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Homepage/Contact/Contact";
import { Doctors } from "./components/Homepage/Doctors/Doctors";
import { Facilities } from "./components/Homepage/Facilities/Facilities";
import { Gallery } from "./components/Homepage/Gallery/Gallery";
import { LogIn } from "./components/Admin/LogIn";
import { Management } from "./components/Homepage/Management/Management";
import { Specialities } from "./components/Homepage/Specialities/Specialities";

import "./App.css";
import { PrivacyPolicy } from "./components/others/PrivacyPolicy";
import { RefundPolicy } from "./components/others/RefundPolicy";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavbarLinks />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<LogIn />} />
          <Route path="/management" element={<Management />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/refundpolicy" element={<RefundPolicy />}></Route>
        </Routes>
        <Footer />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Yogm Hospital</title>
          <meta
            name="description"
            content="Yogm group of hospitals provides one of best healthcare services in india. We provide services OPD/IPD,
           Emergency Service, Regular health checkups, Supportive services, Consultaion and Diagnostic procedure."
          />
          <link rel="canonical" href="https://www.yogmgroup.com" />
        </Helmet>
      </BrowserRouter>
    </div>
  );
}

export default App;
