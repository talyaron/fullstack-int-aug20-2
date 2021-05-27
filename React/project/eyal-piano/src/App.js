import "./App.css";
import KeyBord from "./Components/KeyBord/KeyBord";
import Notes from "./Components/Notes/Notes";

function App() {
  return (
    <div className="screan">
      <div className="tavim">
        <Notes/>
      </div>
      
      <KeyBord />
    </div>
  );
}

export default App;
