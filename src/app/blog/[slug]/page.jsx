import { allPosts } from "contentlayer/generated";
import BlogContent from "./BlogContent";

export async function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === "blog/" + params.slug);

  return { title: post?.title, excerpt: post?.excerpt };
};

const PostLayout = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === "blog/" + params.slug);

  return <BlogContent post={post} />;
};

export default PostLayout;
