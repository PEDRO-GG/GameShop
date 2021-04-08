import Head from "next/head";
import InventoryTable from "../../components/InventoryTable";

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3002/api/v1/products/`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 1,
  };
}

const Inventory = ({ data }) => {
  const products = data.data.products;
  return (
    <>
      <Head>
        <title>GameShop | Inventory</title>
      </Head>

      <InventoryTable products={products} />
    </>
  );
};

export default Inventory;
