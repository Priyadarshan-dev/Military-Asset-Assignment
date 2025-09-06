import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Home from "./Pages/Home";
import Assets from "./Pages/Assets";
import Assignments from "./Pages/Assignments";
import Expenditures from "./Pages/Expenditures";
import Purchases from "./Pages/Purchases";
import Settings from "./Pages/Settings";
import Transfers from "./Pages/Transfers";
import Users from "./Pages/Users";
import Layout from "./Layouts/Layout";


function App() {
  return (
    <Routes>
      {/* Login Page - no sidebar/navbar */}
      <Route path="/" element={<Login />} />

      {/* Home Page - has its own layout */}
      <Route path="/home" element={<Home />} />

      {/* All other pages use Layout */}
      <Route element={<Layout/>}>
        <Route path="/assets" element={<Assets />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/expenditure" element={<Expenditures />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
