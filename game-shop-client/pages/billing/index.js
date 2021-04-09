import Head from "next/head";

const Billing = ({ data }) => {
  const products = data.data.products; //An array of objects; each object is a product.
  //Any HTML in the return() below will be displayed to the webpage
  return (
    <>
      <Head>
        <title>GameShop | Billing</title>
      </Head>
      <h1>These are all of the products:</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>---------------</p>
            <p>
              <b>ID:</b> {product.id}
            </p>
            <p>
              <b>Name:</b> {product.name}
            </p>
            <p>
              <b>Price:</b> {product.price}
            </p>
            <p>
              <b>Status:</b> {product.status}
            </p>
            <p>
              <b>Total Sold:</b> {product.total_sold}
            </p>
            <p>
              <b>Total Revenue:</b> {product.total_revenue}
            </p>
            <p>---------------</p>
          </div>
        );
      })}
    </>
  );
};
//Fetch all of the products and display them into the component above
export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3002/api/v1/products/`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Billing;
