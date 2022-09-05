import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import { Dashboard } from "./components/Admin/Reception/ReceptionDashboard";

import { ButtonAppointment } from "./components/Homepage/Appointment/ButtonAppointment";
import { FeedbackForm } from "./components/Feedback/FeedbackForm";
import { MasterAdminDashboard } from "./components/Admin/MasterAdmin/MasterAdminDashboard";
import { PrivateRoute } from "./components/Admin/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavbarLinks />
        <ButtonAppointment />
        <Routes>
          <Route path="/" element={<Homepage />} />
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/adminlogin" element={<AdminLogIn />} />
          <Route
            path="/admindashboard"
            element={
              <PrivateRoute>
                <MasterAdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
        <DevInfo />
      </BrowserRouter>
    </div>
  );
}

export default App;
