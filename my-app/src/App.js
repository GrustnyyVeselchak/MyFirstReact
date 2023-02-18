import './App.css';
import logo from './Logo-profile.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Logo-profile" alt="logo"/>
        <p>
          GrustnyyVeselchak
        </p>
        <a
          className="App-link"
          href="https://github.com/GrustnyyVeselchak"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
