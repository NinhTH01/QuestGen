import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./module/HomeScreen/HomeScreen";
import DashboardScreen from "./module/DashboardScreen/DashboardScreen";
import React from "react";
import globalState, { globalSlice } from "./global";

const App = () => {
  const updateDimensions = () => {
    const width = window.innerWidth;
    globalState.dispatch(globalSlice.actions.setWidth(width));
  };

  React.useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
