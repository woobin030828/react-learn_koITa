import './App.css';
import TestBlock from './testBlock.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          여기를 수정하거나 <code>src/App.js</code> 저장을 하면 리로딩 됩니다~!
        </p>
        <TestBlock></TestBlock>
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
