import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <div className="App">
      <Navbar title="Text Utilities"/>
      <TextForm Heading="Enter your Text"/>
    </div>
  );
}

export default App;
