export default async function Home() {
  const req = await fetch(process.env.BASE_URL + "/api/blogs");
  let blogs: Blog[];

  try {
    blogs = await req.json();
  } catch (e) {
    console.log(e);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
      {blogs!.map((blog) => (
        <div key={blog._id}>{blog.blogCaption}</div>
      ))}
    </main>
  );
}
