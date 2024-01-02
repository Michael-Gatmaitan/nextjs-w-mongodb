import { InferGetServerSidePropsType } from "next";

export default async function Home() {
  const req = await fetch("https://nextjs-w-mongodb.vercel.app/api/blogs/", {
    cache: "no-cache",
  });
  const blogs: Blog[] = await req.json();

  // console.log(blogs);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
      {blogs.map((blog) => (
        <div key={blog._id}>{blog.blogCaption}</div>
      ))}
    </main>
  );
}
