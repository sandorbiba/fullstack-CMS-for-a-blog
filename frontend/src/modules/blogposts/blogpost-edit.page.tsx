import { RouteComponentProps } from "@reach/router";

interface BlogpostEditProps extends RouteComponentProps {
  blogpostId?: string;
}

const BlogpostEdit = (props: BlogpostEditProps) => {
  return <div> {props.blogpostId} </div>;
};

export default BlogpostEdit;
