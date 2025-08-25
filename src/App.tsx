import React from "react";
import "./styles/tailwind.css";
import HomePage from "./pages/HomePage"; // Import your main component
import { ThemeProvider } from "styled-components"; // Import ThemeProvider from styled-components
import { theme } from "./styles/theme"; // Import your theme settings
import GlobalStyles from "./styles/GlobalStyles"; // Import global styles
import "./styles/global.css"; // Ensure the correct path to your global CSS
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles /> {/* Apply global styles */}
      {/* Diagonal Grid Light Background */}
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

        {/* Your main content on top */}
        <div className="relative z-10">
          <HomePage />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
