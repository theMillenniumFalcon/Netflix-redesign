import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login_1 from "./components/Login_1";
import Login_2 from "./components/Login_2";
import Login_3 from "./components/Login_3";
import Login_4 from "./components/Login_4";
import Header from "./components/Header";
import './App.css';
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login_1 />
            <Login_2 />
            <Login_3 />
            <Login_4 />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
          <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
