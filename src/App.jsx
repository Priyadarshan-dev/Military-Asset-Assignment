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
import CreateAssets from "./Pages/CreateAssets";
import CreateAssignment from "./Pages/CreateAssignment"
import CreateExpenditure from "./Pages/CreateExpenditure"
import CreatePurchase from "./Pages/CreatePurchase"
import Profile from "./Pages/Profile"


function App() {
  return (
    <Routes>
      {/* Login Page - no sidebar/navbar */}
      <Route path="/" element={<Login />} />

      {/* Home Page - has its own layout */}
      <Route path="/home" element={<Home />} />

      {/* All other pages use Layout */}
      <Route element={<Layout />}>
        <Route path="/assets" element={<Assets />} />
        <Route path="/assets/new" element={<CreateAssets />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/transfers/new" element={<CreateAssignment />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/purchases/new" element={<CreatePurchase />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/assignments/new" element={<CreateAssignment />} />
        <Route path="/expenditure" element={<Expenditures />} />
        <Route path="/expenditure/new" element={<CreateExpenditure />} />
        <Route path="/users" element={<Users />} />
         <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
