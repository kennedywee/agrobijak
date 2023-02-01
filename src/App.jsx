import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "../src/screen/HomeScreen.jsx";
import DashboardScreen from "../src/screen/DashboardScreen.jsx";
import FeatureScreen from "./screen/FeatureScreen.jsx";
import RegisterScreen from "./screen/RegisterScreen.jsx";
import LoginScreen from "./screen/LoginScreen.jsx";

import ScheduleScreen from "./screen/Schedule/ScheduleScreen.jsx";
import ScheduleAddScreen from "./screen/Schedule/ScheduleAddScreen.jsx";
import ScheduleEditScreen from "./screen/Schedule/ScheduleEditScreen.jsx";

import AlertScreen from "./screen/Alert/AlertScreen.jsx";
import AlertEditScreen from "./screen/Alert/AlertEditScreen.jsx";
import AlertAddScreen from "./screen/Alert/AlertAddScreen.jsx";

import DeviceScreen from "./screen/Device/DeviceScreen.jsx";
import DeviceDetailScreen from "./screen/Device/DeviceDetailScreen.jsx";
import DeviceAddScreen from "./screen/Device/DeviceAddScreen.jsx";
import DeviceEditScreen from "./screen/Device/DeviceEditScreen.jsx";
import DeviceEditFieldScreen from "./screen/Device/DeviceEditFieldScreen.jsx";

import ProfileScreen from "./screen/ProfileScreen.jsx";

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
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/profile" element={<ProfileScreen />} />

        {/* Functional Links*/}
        <Route exact path="/dashboard" element={<DashboardScreen />} />

        <Route exact path="/schedule" element={<ScheduleScreen />} />
        <Route exact path="/schedule/:id" element={<ScheduleEditScreen />} />
        <Route exact path="/schedule/add" element={<ScheduleAddScreen />} />

        <Route exact path="/alert" element={<AlertScreen />} />
        <Route exact path="/alert/add" element={<AlertAddScreen />} />
        <Route exact path="/alert/:id" element={<AlertEditScreen />} />

        <Route exact path="/device" element={<DeviceScreen />} />
        <Route exact path="/device/add" element={<DeviceAddScreen />} />
        <Route exact path="/device/:id" element={<DeviceDetailScreen />} />
        <Route exact path="/device/:id/edit/" element={<DeviceEditScreen />} />
        <Route
          exact
          path="/device/:id/edit/fields"
          element={<DeviceEditFieldScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
