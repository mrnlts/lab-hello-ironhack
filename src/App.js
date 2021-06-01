import './App.css';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Box4 from './components/Box4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= "./images/react-logo.svg" alt="react-logo" className="react-logo" />
        <div class="App-header-container">

          <div className="App-header-menu">
            <img src="./images/ironhack-logo.svg" alt="logo"/>
            <img src="./images/menu-top.svg" alt="menu" />
          </div>

          <div className="App-header-content">
            <h1>Say hello to <br /> ReactJS </h1>
            <p>You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer.</p>
            <button >Awesome!</button>
          </div>

        </div>
      </header>

      <main className="App-main">
        <div className="App-main-container">
          <Box1 />
          <Box2 />
          <Box3 />
          <Box4 />
        </div>
      </main>
    </div>
  );
}

export default App;
