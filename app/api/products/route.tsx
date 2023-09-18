import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, product: "milk", price: 1.99 },
    { id: 2, product: "bread", price: 2.99 },
    { id: 3, product: "butter", price: 5.99 },
  ]);
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json(
    {
      id: body.id,
      product: body.product,
      price: body.price,
    },
    { status: 201 }
  );
}
