import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./module/HomeScreen/HomeScreen";
import DashboardScreen from "./module/DashboardScreen/DashboardScreen";
import React from "react";
import globalState, { globalSlice } from "./global";
import PricingScreen from "./module/PricingScreen/PricingScreen";
import TeamScreen from "./module/TeamScreen/TeamScreen";
import BlogScreen from "./module/BlogScreen/BlogScreen";
import ContactScreen from "./module/ContactScreen/ContactScreen";
import FaqsScreen from "./module/FaqsScreen/FaqsScreen";
import MCQScreen from "./module/MCQScreen/MCQScreen";
import TrueFalseScreen from "./module/TrueFalseScreen/TrueFalseScreen";
import AiFaqScreen from "./module/AiFaqScreen/AiFaqScreen";
import HighOrderScreen from "./module/HighOrderScreen/HighOrderScreen";

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
        <Route path="/pricing" element={<PricingScreen />} />
        <Route path="/team" element={<TeamScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/faqs" element={<FaqsScreen />} />
        <Route path="/ai-mcq-generator" element={<MCQScreen />} />
        <Route
          path="/ai-true-false-quiz-generator"
          element={<TrueFalseScreen />}
        />
        <Route path="/ai-faq-generator" element={<AiFaqScreen />} />
        <Route
          path="/ai-high-order-question-generator"
          element={<HighOrderScreen />}
        />
      </Routes>
    </Router>
  );
};

export default App;
