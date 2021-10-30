import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import pages from "./pages";
import { Navbar, Header } from "./components";
import "./App.css";

const renderRoute = (Comp, props) => (
  <Route
    {...Comp.route}
    component={(routeProps) => <Comp {...{ routeProps, ...props }} />}
  />
);

function App() {
  const [pageTitle, setPageTitle] = useState("butts");
  const routes = pages.map((Comp) => renderRoute(Comp, { setPageTitle }));
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="column">
          <Header pageTitle={pageTitle} />
          <main>
            <Switch>{routes}</Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
