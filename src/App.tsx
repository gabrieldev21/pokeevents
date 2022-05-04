import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import { PokemonProvider } from "./context/PokemonContext";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <PokemonProvider>
      <Header />
      <PokemonList />
      <GlobalStyles />
    </PokemonProvider>
  );
}

export default App;
