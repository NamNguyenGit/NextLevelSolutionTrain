import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ModelProvider from "./context/providers/ModelProvider";
import Nav from "./components/Nav";
import NavProvider from "./context/providers/NavProvider";
import Toggle from "./components/Toggle";
import { HelmetProvider } from "react-helmet-async";
import DestinationsProvider from "./context/providers/DestinationsProvider";

function App() {
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <DestinationsProvider>
            <Toggle />
            <Nav />
            <HelmetProvider>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route component={NotFound} />
              </Switch>
            </HelmetProvider>
          </DestinationsProvider>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
