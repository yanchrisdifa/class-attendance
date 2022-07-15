import "./App.scss";
import Login from "./login/login";
import Dashboard from "./dashboard/dashboard";
import Sidebar from "./sidebar/sidebar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/:menu" element={<Sidebar/>}></Route>
        </Routes>
      </Router>
    );
}

export default App;
