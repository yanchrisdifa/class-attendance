import "./App.scss";
import Login from "./login/login";
import Dashboard from "./dashboard/dashboard";
import Sidebar from "./sidebar/sidebar";
import Table from "./table/table";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<Sidebar/>}>
            <Route path="dashboard" element={<Dashboard/>}></Route>
            <Route path="table" element={<Table/>}></Route>
          </Route>
        </Routes>
      </Router>
    );
}

export default App;
