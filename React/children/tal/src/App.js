import logo from './logo.svg';
import './App.css';

//component
import Title from './Title';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
       <Title title='Good evening'/>
       </Card>
      </header>
    </div>
  );
}

export default App;
