import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import { PokemonProvider } from "./context/PokemonContext";

import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <PokemonProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <PokemonList />
        <GlobalStyles />
      </ThemeProvider>
    </PokemonProvider>
  );
}
