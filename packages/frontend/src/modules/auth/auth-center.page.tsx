import { RouteComponentProps } from "@reach/router";
import { Link } from "@reach/router";

const AuthCenter = (props: RouteComponentProps) => {
  return (
    <div>
      AuthCenter
      <Link to="login">Login</Link>
      <Link to="register">Register</Link>
    </div>
  );
};

export default AuthCenter;
