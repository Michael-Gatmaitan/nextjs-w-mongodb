import Blog from "./(components)/BlogComponent/Blog";

// This line prevents error from building the project
export const dynamic = "force-dynamic";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/blogs", {
    next: {
      revalidate: 0,
    },
  });

  const blogs: Blog[] = await req.json();

  console.log(blogs);

  return (
    <div className="flex items-center flex-col">
      <div className="blogs grid gap-2">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
