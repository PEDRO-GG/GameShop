import Head from "next/head";
import { useContext, useEffect } from "react";
import AddProductForm from "../../components/AddProductForm";
import InventoryTable from "../../components/InventoryTable";
import { ProductsContext } from "../../context/ProductsContext";

const Inventory = ({ data }) => {
  const { products, setProducts } = useContext(ProductsContext);
  useEffect(() => {
    setProducts(data.data.products);
  }, [products]);
  return (
    <>
      <Head>
        <title>GameShop | Inventory</title>
      </Head>
      <AddProductForm products={products} setProducts={setProducts} />
      <InventoryTable products={products} setProducts={setProducts} />
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
