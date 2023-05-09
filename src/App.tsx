import Home from "./Components/Home/Home";
import "./App.css";
import ProjectNavbar from "./Components/Navbar/ProjectNavbar";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import { withRouter } from "./HOC";
import { Protected, AuthProtected } from "./Components/Protected/Protected";
import Products from "./Components/Products/Products";

import AccountLogin from "./Components/MyAccount/AccountLogin";
import About from "./Components/About/About";
import FAQ from "./Components/FAQ's/FAQ";
import Services from "./Components/Services/Services";
function App(props: any) {
  return (
    <div className="App">
      <ProjectNavbar router={undefined} />
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/myaccount" element={<AccountLogin />} />

        <Route path="/products" element={<Protected Component={Products} />} />
        <Route path="/about" element={<Protected Component={About} />} />
        <Route path="/faq" element={<Protected Component={FAQ} />} />
        <Route path="/services" element={<Protected Component={Services} />} />

        <Route path="/login" element={<AuthProtected Component={Login} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default withRouter(App);
