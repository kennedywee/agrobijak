import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "../src/screen/HomeScreen.jsx";
import DashboardScreen from "../src/screen/DashboardScreen.jsx";
import FeatureScreen from "./screen/FeatureScreen.jsx";
import RegisterScreen from "./screen/RegisterScreen.jsx";
import LoginScreen from "./screen/LoginScreen.jsx";
import OverviewScreen from "./screen/OverviewScreen.jsx";
import ScheduleScreen from "./screen/ScheduleScreen.jsx";
import AlertScreen from "./screen/AlertScreen.jsx";
import DeviceScreen from "./screen/DeviceScreen.jsx";
import DeviceDetailScreen from "./screen/DeviceDetailScreen.jsx";
import DeviceAddScreen from "./screen/DeviceAddScreen.jsx";
import DeviceEditScreen from "./screen/DeviceEditScreen.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Marketing Links*/}
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/features" element={<FeatureScreen />} />
        <Route exact path="/about" element={<FeatureScreen />} />
        <Route exact path="/pricing" element={<FeatureScreen />} />
        <Route exact path="/contact" element={<FeatureScreen />} />

        {/* Basic Links */}
        <Route exact path="/signup" element={<RegisterScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />

        {/* Functional Links*/}
        <Route exact path="/overview" element={<OverviewScreen />} />

        <Route exact path="/dashboard" element={<DashboardScreen />} />

        <Route exact path="/schedule" element={<ScheduleScreen />} />
        <Route path="/schedule/:id" element={<h1>Schedule Detail</h1>} />

        <Route exact path="/alert" element={<AlertScreen />} />
        <Route exact path="/alert/:id" element={<h1>Alert Detail</h1>} />

        <Route exact path="/device" element={<DeviceScreen />} />
        <Route exact path="/device/add" element={<DeviceAddScreen />} />
        <Route exact path="/device/:id" element={<DeviceDetailScreen />} />
        <Route exact path="/device/edit" element={<DeviceEditScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
