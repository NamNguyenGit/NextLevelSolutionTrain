import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ModelProvider from "./context/providers/ModelProvider";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <ModelProvider>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route component={NotFound} />
        </Switch>
      </ModelProvider>
    </Router>
  );
}

export default App;
