import { Router, Link } from "@reach/router";
import NotFound from "./modules/404/404.page";
import Auth from "./modules/auth/auth.page";
import Login from "./modules/auth/login.page";
import Register from "./modules/auth/register.page";
import Blog from "./modules/blog/blog.page";
import BlogpostsByUser from "./modules/blog/blogpost.page";
import BlogpostsList from "./modules/blog/blogpost-list.page";
import BlogpostCreate from "./modules/blog/blogpost-create.page";
import BlogpostDetails from "./modules/blog/blogpost-details.page";
import BlogpostEdit from "./modules/blog/blogpost-edit.page";
import AuthCenter from "./modules/auth/auth-center.page";

const App = () => (
  <div>
    <nav>
      <Link to="/">Blog</Link>
      <Link to="user/34">404</Link>
      <Link to="auth/">Auth center</Link>
      <Link to="auth/login">Login</Link>
      <Link to="auth/register">Register</Link>
      <Link to="blogposts">Blogposts</Link>
      <Link to="blogposts/create">Blogpost create</Link>
      <Link to="blogposts/42">Blogpost #42</Link>
      <Link to="blogposts/42/edit">Blogpost #42 edit</Link>
    </nav>
    <Router>
      <Blog path="/" />
      <Auth path="auth">
        <AuthCenter path="/" />
        <Login path="login" />
        <Register path="register" />
        <NotFound default />
      </Auth>
      <BlogpostsByUser path="blogposts">
        <BlogpostsList path="/" />
        <BlogpostCreate path="create" />
        <BlogpostEdit path=":blogpostId/edit" />
        <BlogpostDetails path=":blogpostId" />
        <NotFound default />
      </BlogpostsByUser>
      <NotFound default />
    </Router>
  </div>
);

export default App;
