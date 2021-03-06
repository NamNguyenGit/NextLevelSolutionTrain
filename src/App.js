import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ModelProvider from "./context/providers/ModelProvider";
import Nav from "./components/Nav";
import NavProvider from "./context/providers/NavProvider";
import Toggle from "./components/Toggle";
import { HelmetProvider } from "react-helmet-async";
import DestinationsProvider from "./context/providers/DestinationsProvider";
import Details from "./pages/Details";
import SharedProvider from "./context/providers/SharedProvider";
import AnimationProvider from "./context/providers/AnimationProvider";
import GalleryProvider from "./context/providers/GalleryProvider";
function App() {
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <GalleryProvider>
            <DestinationsProvider>
              <SharedProvider>
                <AnimationProvider>
                  <Toggle />
                  <Nav />
                  <HelmetProvider>
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/about" exact component={About} />
                      <Route path="/contact" exact component={Contact} />
                      <Route path="/details/:id" exact component={Details} />
                      <Route component={NotFound} />
                    </Switch>
                  </HelmetProvider>
                </AnimationProvider>
              </SharedProvider>
            </DestinationsProvider>
          </GalleryProvider>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
