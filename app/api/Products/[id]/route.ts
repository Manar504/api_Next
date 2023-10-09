import { NextRequest, NextResponse } from "next/server";


interface Props{
    params:{id:string}
}
export function GET(request: NextRequest,{params}:Props) {

    // if(params.id>100)
    // return NextResponse.json({error:"Product Not Fount"},{status:404})
    
    switch (params.id) {
      case "10":
        return NextResponse.json({
          id: "10",
          product_name: "Hp zbook",
          price:12000,
          
        },)
        break;
        case "30":
          return NextResponse.json({
            id: "30",
            product_name: "Hp zbook",
            price:12000,
            
          },)
          break;
          case "15":
            return NextResponse.json({
              id: "15",
              product_name: "Dell G5 GAMING",
              price:12000,
              
            },)
            break;
    
      default:
        break;
    }
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
    ]);
  }

    export  async function PUT(request: NextRequest,{params}:Props) {

        const body = await request.json();
             if (!body.product_name) 
            return NextResponse.json({error:"Name Is requierd"},{status:400});
        return NextResponse.json({id:params.id, product_name:body.product_name ,price:body.price})
    }