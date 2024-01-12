import Likes from "./Likes";

const Blog = (props: { blog: Blog }) => {
  const { blog } = props;
  const { _id, blogCaption, blogLikes } = blog;

  return (
    <div>
      <div className="p-4 rounded-md bg-purple-800 text-white">
        <p className="text-sm">{_id}</p>

        <h2 className="text-xl">{blogCaption}</h2>
        <Likes blogLikes={blogLikes} _id={_id} />
      </div>
    </div>
  );
};

export default Blog;
