export default async function Home() {
  const req = await fetch(process.env.BASE_URL + "/api/blogs");
  const blogs: Blog[] = await req.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
      {blogs.map((blog) => (
        <div key={blog._id}>{blog.blogCaption}</div>
      ))}
    </main>
  );
}
