import Head from "next/head";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";

const Billing = () => {
  // const products = data.data.products; //An array of objects; each object is a product.
  //Any HTML in the return() below will be displayed to the webpage

  const [order, setOrder] = useState([]);
  const addToOrder = (product) => {
    setOrder((order) => [...order, product]); //async function so console.log below it runs first
  };
  const submitOrder = () => {
    let orderPrices = order.map((product) => Number(product.price));
    let orderTotal = orderPrices.reduce((acc, cur) => acc + cur);
    setOrder([]);
    alert(`Your order total is ${orderTotal}`);
  };
  let products = [
    {
      id: "58",
      name: "CS",
      price: "332.32",
      status: false,
      total_sold: 4321,
      total_revenue: "5.00",
    },
    {
      id: "40",
      name: "Minecraft 33",
      price: "33.23",
      status: true,
      total_sold: 1,
      total_revenue: "6000.54",
    },
    {
      id: "60",
      name: "gears of war",
      price: "23.00",
      status: false,
      total_sold: 211,
      total_revenue: "555.00",
    },
    {
      id: "29",
      name: "Fortnight",
      price: "909.00",
      status: true,
      total_sold: 32,
      total_revenue: "23.12",
    },
    {
      id: "43",
      name: "Roblox",
      price: "100.10",
      status: true,
      total_sold: 1,
      total_revenue: "1.22",
    },
    {
      id: "52",
      name: "Call f duty",
      price: "2332.42",
      status: true,
      total_sold: 110232,
      total_revenue: "1341.41",
    },
    {
      id: "59",
      name: "Rust",
      price: "60.23",
      status: true,
      total_sold: 23,
      total_revenue: "322.23",
    },
  ];
  return (
    <>
      <Head>
        <title>GameShop | Billing</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 m-10">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToOrder={addToOrder}
            />
          );
        })}
      </div>
      {order.length > 0 && (
        <div className="bg-blue-500 m-10 p-5 max-w-md	mx-auto">
          <h1 className="text-2xl text-center text-white">Your Order</h1>
          {order.map((product) => {
            return (
              <div key={product.id} className="m-2 p-5 bg-white">
                <p className="text-xl">{product.name}</p>
                <p className="text-lg font-light">${product.price}</p>
              </div>
            );
          })}
          <button
            onClick={submitOrder}
            className="w-24 block mx-auto bg-white p-3"
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};
//Fetch all of the products and display them into the component above
// export async function getStaticProps(context) {
//   const res = await fetch(`http://localhost:3002/api/v1/products/`);
//   const data = await res.json();
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

export default Billing;
