import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
    </Router>
      </header>
    </div>
  );
}

export default App;
