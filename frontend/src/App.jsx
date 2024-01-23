import SheetAcceuil from "./assets/components/SheetAcceuil";
import NavBar from "./assets/components/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <main>
        <NavBar />
        <header className="App-header">
          <h1>Nouvelle vie de Jouet</h1>
          <h2>Visite du site</h2>
        </header>
        <SheetAcceuil />
      </main>
    </div>
  );
}

export default App;
