import { useNavigate } from 'react-router-dom';
import './app.css'
import logo from "./dog.jpg";

function App() {

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="textColor">Welcome Back</h1>
      <div >
        <img className='img' src={logo} alt="imgdogo" />
      </div>
      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>

      
    </div>
  );
}

export default App;
