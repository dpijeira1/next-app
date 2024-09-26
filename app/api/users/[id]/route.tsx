import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

//Reading a User
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  else return NextResponse.json({ id: 1, name: "Dan" });
}

//Updating a User
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //Validate the request body
  const body = await request.json();
  // If Invalid, return 400 bad request
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });
  //Fetch the user with the given Id
  //If doesn't exist, return 404 not found
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  //else update the User
  return NextResponse.json({ id: 1, name: body.name });
  //return the updated user
}

//Deleting a User
export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //Fetch user from db
  //If user is not found, return 404
  //Return 200 response
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({}, { status: 200 });
}
