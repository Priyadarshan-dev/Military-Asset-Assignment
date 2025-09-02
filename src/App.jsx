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


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/assets" element={<Home><Assets /></Home>}></Route>
      <Route path="/transfers" element={<Home><Assignments /></Home>}></Route>
      <Route path="/purchases" element={<Home><Expenditures /></Home>}></Route>
      <Route path="/assignments" element={<Home><Purchases /></Home>}></Route>
      <Route path="/expenditure" element={<Home><Settings /></Home>}></Route>
      <Route path="/users" element={<Home><Transfers /></Home>}></Route>
      <Route path="/settings" element={<Home><Users /></Home>}></Route>
    </Routes>
  );
}

export default App;

