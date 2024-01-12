import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req: Request) {
  const body = await req.json();
  const { _id, likes } = body;

  const client = await clientPromise;
  const db = client.db("BlogDB");
  const blogCollection = db.collection("blog");

  const blogs = await blogCollection
    .updateOne(
      {
        _id: new ObjectId(_id),
      },
      {
        $set: {
          blogLikes: likes,
        },
      }
    )
    .then((data) => console.log(data));
  return new Response(JSON.stringify(blogs));
}
