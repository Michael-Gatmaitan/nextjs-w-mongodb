import clientPromise from "@/lib/mongodb";

export async function PUT(req: Request) {
  const body: UserAccount = await req.json();

  const client = await clientPromise;
  const db = client.db("BlogDB");
  const col = db.collection("accounts");

  const userAccount = await col
    .find({ username: body.username, password: body.password })
    .toArray();

  if (!userAccount.length) {
    console.log("No user found");
    return new Response(JSON.stringify({ noAccountFound: true }));
  } else {
    return new Response(JSON.stringify(userAccount));
  }
}
