import logoJWBlanc from "./image/LogoJWBlanc.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoJWBlanc} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://jwellweb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le site JwellWeb
        </a>
      </header>
    </div>
  );
}

export default App;
