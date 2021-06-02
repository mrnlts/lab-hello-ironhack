import './App.css';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./images/react-logo.svg" alt="react-logo" className="react-logo" />
        <div class="App-header-container">
          <div className="App-header-menu">
            <img src="./images/ironhack-logo.svg" alt="logo" />
            <img src="./images/menu-top.svg" alt="menu" />
          </div>

          <div className="App-header-content">
            <h1>
              Say hello to <br /> ReactJS{' '}
            </h1>
            <p>
              You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja
              developer.
            </p>
            <button>Awesome!</button>
          </div>
        </div>
      </header>

      <main className="App-main">
        <div className="App-main-container">
          <Box box="1" />
          <Box box="2" />
          <Box box="3" />
          <Box box="4" />
        </div>
      </main>
    </div>
  );
}

export default App;
