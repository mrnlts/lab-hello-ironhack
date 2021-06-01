import './App.css';
import Box from './components/Box';

const box1 = {'source': "./images/icon1.png", 'alt': 'icon1', 'title': 'Declarative', 'text': (<p> React makes it <br /> painless to create <br /> interactive UIs.</p>)};
const box2 = {'source': "./images/icon2.png", 'alt': 'icon2', 'title': 'Components', 'text': (<p> Build encapsulated <br /> components that <br /> manage their state.</p>)};
const box3 = {'source': "./images/icon3.png", 'alt': 'icon3', 'title': 'Single-Way', 'text': (<p> A set of immutable <br /> values are passed to <br /> the components.</p>)};
const box4 = {'source': "./images/icon4.png", 'alt': 'icon4', 'title': 'JSX', 'text': (<p> Statically-typed, <br /> designed to run on <br /> modern browsers.</p>)};


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
          <Box data="box" />
          <Box data="box" />
          <Box data="box" />
          <Box data="box" />
        </div>
      </main>
    </div>
  );
}

export default App;
