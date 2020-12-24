import { Router, Link } from "@reach/router";
import Auth from "./modules/auth/auth.page";
import Login from "./modules/auth/login.page";
import Register from "./modules/auth/register.page";
import Blog from "./modules/blog/blog.page";
import UserById from "./modules/user/user.page";

const App = () => (
  <div>
    <nav>
      <Link to="/">Blog</Link> <Link to="user/34">Dashboard</Link>
    </nav>
    <Router>
      <Blog path="/" />
      <Auth path="auth">
        <Login path="login" />
        <Register path="register" />
      </Auth>
      <UserById path="user/:userById" />
    </Router>
  </div>
);

export default App;
