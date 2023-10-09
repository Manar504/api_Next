import { NextRequest, NextResponse } from "next/server";
import schema from './[id]/schema';

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: "10",
      product_name: "Hp zbook",
      price:12000,
      
    },
    {
      id: "30",
      product_name: "Dell G5 GAMING",
      price:27000,
      
    },
    {
      id: "38",
      product_name: "macBook Pro",
      price:27000,
    },
  ]);
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body)
    if(!validation.success)
    return NextResponse.json({error:"Price Most Be More than 1000"},{status:400});
    return NextResponse.json({id:1, product_name:body.product_name ,price:body.price},{status:201})
    
  }