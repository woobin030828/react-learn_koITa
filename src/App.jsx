import './App.css';
import TestBlock from './testBlock.jsx';
/*
import Jsx01 from './docs/step/Jsx01.jsx';
import Jsx02 from './docs/step/Jsx02.jsx';
import Jsx03 from './docs/step/Jsx03.jsx';
import Jsx04 from './docs/step/Jsx04.jsx';
import Jsx05 from './docs/step/Jsx05.jsx';
*/
import PropsContainer from './docs/props/PropsContainer.jsx';
import Count from './docs/state/Count.jsx'
import Name from './docs/state/Name.jsx'
import Sound from './docs/state/Sound.jsx'
import Colors from './docs/state/Colors.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestBlock />
        {/*
        <Jsx01 />
        <Jsx02 />
        <Jsx03 />
        <Jsx04 />
        <Jsx05 />
        */}
        <PropsContainer />
        <Count></Count>
        <Name />
        <Sound />
        <Colors />
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
