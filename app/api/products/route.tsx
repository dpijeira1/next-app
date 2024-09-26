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
      name: "A Ball",
      price: 13.22,
    },
    { id: 2, name: "Lego Set", price: 129.99 },
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
  return NextResponse.json({
    name: validation.data.name,
    price: validation.data.price,
  });
}
