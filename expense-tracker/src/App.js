import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />

      </Router>
    </div>
  )
}
export default App;