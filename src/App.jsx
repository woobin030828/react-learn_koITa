import './App.css';
import TestBlock from './testBlock.jsx';
import Jsx01 from './docs/Jsx01.jsx';
import Jsx02 from './docs/Jsx02.jsx';
import Jsx03 from './docs/Jsx03.jsx';
import Jsx04 from './docs/Jsx04.jsx';
import Jsx05 from './docs/Jsx05.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestBlock />
        <Jsx01 />
        <Jsx02 />
        <Jsx03 />
        <Jsx04 />
        <Jsx05 />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          배우다 리액트!
        </a>
      </header>
    </div>
  );
}

export default App;
