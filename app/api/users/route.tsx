//HTTP requests
//GET - getting data
//POST - creating data
//PUT - updating data

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  //fetch users from the database
  return NextResponse.json([
    {
      id: 1,
      name: "Blahh",
    },
    { id: 2, name: "Blorg" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  //Validate
  //If Invalid, return 400
  //Else, return data
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name });
}
