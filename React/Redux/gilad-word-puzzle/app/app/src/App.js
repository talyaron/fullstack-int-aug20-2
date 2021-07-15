
import './App.css';
import Words from './components/words'
import Result from './components/result'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          CREAT A COHERENT SENTENCE!!!
        </p>
        <div id ='words'>
          <Words/>
          </div>
          <div id='result'>
          <Result/>
          </div>
        
      </header>
    </div>
  );
}

export default App;
