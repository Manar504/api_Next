import Image from 'next/image'

type Product = {
  product_name:string,
  price:number,
}
export default async function Home() {
  const data  = await fetch("http://localhost:3000/api/Products");
  const res =  await data.json();


  return (
      <div>
        {res.map(((item:Product) =>  <h1 key={item.price}>{item.product_name} and the price is {item.price}</h1>))}
        
      </div>
  )
}