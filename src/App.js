import React from "react";
import HomePage from "./pages/HomePage"; // Import your main component
import { ThemeProvider } from "styled-components"; // Import ThemeProvider from styled-components
import { theme } from "./styles/theme"; // Import your theme settings
import GlobalStyles from "./styles/GlobalStyles"; // Import global styles
import "./styles/global.css"; // Ensure the correct path to your global CSS

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles /> {/* Apply global styles */}
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
