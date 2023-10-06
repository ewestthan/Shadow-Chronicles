import './App.css';
import Card from './Card';
import Arrow from "./assets/Arrow.png"
function App() {
  return (
    <div className="App">
     <h1 className='title'>Shadow Chronicles</h1>
     <img className="arrow" src={Arrow}/>
     <div className="card-section">
      <Card />
      <Card />
      <Card />
     </div>
  
    </div>
  );
}

export default App;
