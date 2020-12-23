import { Router, Link } from "@reach/router";

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
    </nav>
    <Router>
      <Blog path="/" />
      <Auth path="auth">
        <Login path="login" />
        <Register path="register" />
      </Auth>
      <User path="user">
        <UserById path="user/:userId" />
      </User>
    </Router>
  </div>
);

export default App;
