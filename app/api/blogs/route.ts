import clientPromise from "@/lib/mongodb";

// We need this line for getting the latest mongodb data.
export const revalidate = 0;

export async function GET() {
  // mongoose //   .connect(process.env.MONGODB_URI!) //   .then(() => console.log("MongoDB connected...")) //   .catch((err) => console.log(err));
  const client = await clientPromise;

  console.log(client);
  const db = client.db("BlogDB");
  const blogs = await db.collection("blog").find({}).toArray();

  return new Response(JSON.stringify(blogs));
}
