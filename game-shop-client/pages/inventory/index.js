import Head from "next/head";
import AddProductForm from "../../components/AddProductForm";
import InventoryTable from "../../components/InventoryTable";

const Inventory = ({ data }) => {
  let products = data.data.products;
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

//GET all the products
export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3002/api/v1/products/`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Inventory;
