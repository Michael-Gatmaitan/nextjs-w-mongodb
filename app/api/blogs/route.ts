import clientPromise from "@/lib/mongodb";

export async function GET() {
  // mongoose
  //   .connect(process.env.MONGODB_URI!)
  //   .then(() => console.log("MongoDB connected..."))
  //   .catch((err) => console.log(err));
  const client = await clientPromise;
  const db = client.db("BlogDB");

  const blogs = await db.collection("blog").find({}).toArray();

  return new Response(JSON.stringify(blogs));
}
