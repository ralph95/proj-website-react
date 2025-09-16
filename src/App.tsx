import React from "react";
import "./styles/tailwind.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import "./styles/global.css";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DashBoardPage from "./pages/DashBoardPage";
import CheckMailVerification from "./pages/CheckMailVerification";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="min-h-screen w-full bg-[#fafafa] relative text-gray-900">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
              repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/main" element={<DashBoardPage />} />
              <Route path="/check-email" element={<CheckMailVerification />} />
            </Routes>
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
