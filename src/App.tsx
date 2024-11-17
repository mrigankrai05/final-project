import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bed from "./Bed";
import Inventory from "./Inventory";
import Hospitalfinder from "./Hospitalfinder";
import Ambulance from "./Ambulance";
import Appointments from "./Appointment";
import Landing from "./landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/bed" element={<Bed />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/hospitalfinder" element={<Hospitalfinder />} />
        <Route path="/appointment" element={<Appointments />} />
        <Route path="/ambulance" element={<Ambulance />} />
      </Routes>
    </Router>
  );
}
export default App;
