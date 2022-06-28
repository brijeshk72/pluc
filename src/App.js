// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup } from "./pages/user";
import Dashboard from "./pages/dashboard/Dashboard";
import RequireAuth from "./auth/RequireAuth";
import NoAuthRequired from "./auth/NoAuthRequired";
import TAC from "./pages/cms/TAC";
import Privacy from "./pages/cms/Privacy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <NoAuthRequired>
                <Login />
              </NoAuthRequired>
            }
          />
          <Route
            path="/signup"
            element={
              <NoAuthRequired>
                <Signup />
              </NoAuthRequired>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="/tac" element={<TAC />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
