import { useLoaderData } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import { getPost } from "../util/api";

function PostDetailPage() {
  const postDetail = useLoaderData();

  console.log(postDetail);

  return (
    <>
      {postDetail && (
        <BlogPost title={postDetail.title} text={postDetail.body} />
      )}
    </>
  );
}

export default PostDetailPage;

export function loaderPostDetail({ params }) {
  const id = params.id;
  return getPost(id);
}
