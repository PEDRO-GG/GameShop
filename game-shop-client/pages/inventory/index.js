import Head from "next/head";
import AddProductForm from "../../components/AddProductForm";
import InventoryTable from "../../components/InventoryTable";

const Inventory = () => {
  // let products = data.data.products;
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
        <title>GameShop | Inventory</title>
      </Head>
      <AddProductForm />
      <InventoryTable products={products} />
    </>
  );
};

// //GET all the products
// export async function getServerSideProps(context) {
//   const res = await fetch(`http://localhost:3002/api/v1/products/`);
//   const data = await res.json();
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

export default Inventory;
