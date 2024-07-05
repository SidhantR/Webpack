import './app.css'
import logo from "./dog.jpg";

function App() {
  return (
    <div>
      <h1 className="textColor">Welcome Back</h1>
      <div >
        <img className='img' src={logo} alt="imgdogo" />
      </div>
    </div>
  );
}

export default App;
