import EditProductForm from "../../components/EditProductForm";

const Product = ({ product }) => {
  return (
    <>
      <EditProductForm product={product}></EditProductForm>
    </>
  );
};

export const getStaticPaths = async () => {
  //Get all the products and create a static page for each single one
  const res = await fetch("http://localhost:3002/api/v1/products/");
  const data = await res.json();
  const products = data.data.products;

  const ids = products.map((product) => product.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  //For each static page, fetch its data
  const id = context.params.id;
  const res = await fetch(`http://localhost:3002/api/v1/products/${id}/`);
  const data = await res.json();

  return {
    props: { product: data.data.product },
  };
};

export default Product;
