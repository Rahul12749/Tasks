// import HomePage from './components/HomePage';
// import {Router, Switch, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import "./index.css";

function App() {
  return (
    
    <div className="App">
      <HomePage />
      <div className="container">
      <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
        OR
      <Login / >
      </div>
    </div>
    
  );
}

export default App;
