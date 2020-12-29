interface Props {
  children: JSX.Element | JSX.Element[];
  path: string;
}

const Auth = ({ children }: Props) => {
  return <div> {children} </div>;
};

export default Auth;
