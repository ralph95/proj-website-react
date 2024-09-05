import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    padding: 0;
  }

  h1 {
    color: ${(props) =>
      props.theme.colors.primary}; /* Apply primary color to all h1 */
    font-size: 2.5rem;
  }

  /* You can also set other elements' default styles here, like a, p, etc. */
`;

export default GlobalStyles;
