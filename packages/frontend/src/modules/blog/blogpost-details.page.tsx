import { RouteComponentProps } from "@reach/router";

interface BlogpostDetailsProps extends RouteComponentProps {
  blogpostId?: string;
}

const BlogpostDetails = (props: BlogpostDetailsProps) => {
  return <div> {props.blogpostId} </div>;
};

export default BlogpostDetails;
