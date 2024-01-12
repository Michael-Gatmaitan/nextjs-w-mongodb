import clientPromise from "@/lib/mongodb";
import { WithId } from "mongodb";

/**
 * @param req.json () -> void
 */

export async function POST(req: Request) {
  const body: Promise<UserAccount> = await req.json();
  const { username, password } = await body;

  const client = await clientPromise;
  const db = client.db("BlogDB");
  const accounts = db.collection("accounts");

  const usernameAlreadyCreated = await accounts
    .find({
      username: username,
    })
    .limit(1)
    .toArray();

  if (usernameAlreadyCreated.length !== 0) {
    console.log("Username already exists");

    return new Response(
      JSON.stringify({ message: "Username already exists." })
    );
  } else {
    const operation = await accounts.insertOne(body);
    console.log("Creating account, ", operation.acknowledged);
    return new Response(
      JSON.stringify({ message: "Account created successfully." })
    );
  }
}
