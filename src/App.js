import logo from "./logo.svg";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/DashboardPage/Dashboard/Dashboard";
import Finance from "./pages/DashboardPage/Finance/Finance";
import { ThemeProvider } from "@material-ui/core";
import GlobalTheme from "./styles/GlobalTheme";

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/finance">
              <Finance />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
