import { RouteComponentProps } from "@reach/router";

interface UserByIdProps extends RouteComponentProps {
  userById?: string;
}

const UserById = (props: UserByIdProps) => {
  return <div> {props.userById} </div>;
};

export default UserById;
