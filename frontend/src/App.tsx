import "./App.css";
import "./index.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AllRoutes from "./components/routes/container/AllRoutes";
import RoutesContainer from "./components/routes/container/RoutesContainer";
import { AuthProvider } from "./components/auth/context/AuthProvider";
import { AlertProvider } from "./shared/sharedAlert/context/AlertContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AlertProvider>
          <Routes>
            {AllRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <RoutesContainer
                    element={route.element}
                    isProtected={route.isProtected}
                    requiredRole={route.requiredRole}
                    path={route.path}
                  />
                }
              />
            ))}
          </Routes>
        </AlertProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
