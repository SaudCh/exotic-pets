import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Shared/header.jsx";
import Home from "./components/Home/home.jsx";
import Form from "./components/Search/search.jsx";
import Login from "./components/Login/login.jsx";
import Register from "./components/Register/register.jsx";
import Users from "./components/Users/users.jsx";
import User from "./components/User/user.jsx";
import Footer from "./components/Shared/footer";
import { Routes, Route, Link } from "react-router-dom";
import Bird from "./components/Birds/Bird";
import AddBird from "./components/AddBird/AddBird";

function App() {
  return (
    <Routes>
      <Header />

      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search" exact>
        <Form />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/users" exact>
        <Users />
      </Route>
      <Route path="/birds/add/" exact>
        <AddBird />
      </Route>
      <Route path="/birds/:userId" exact>
        <User />
      </Route>
      <Route path="/bird/:id" exact>
        <Bird />
      </Route>
      {/* <Redirect to="/error" /> */}

      <Footer />
    </Routes>
  );
}

export default App;
