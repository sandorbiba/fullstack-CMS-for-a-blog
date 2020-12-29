interface Props {
  children: JSX.Element | JSX.Element[];
  path: string;
}

const BlogpostsByUser = ({ children }: Props) => {
  return <div> {children} </div>;
};

export default BlogpostsByUser;
