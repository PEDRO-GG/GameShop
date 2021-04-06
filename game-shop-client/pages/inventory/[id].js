import { Formik } from "formik";
const Product = ({ product }) => {
  return (
    <>
      <h1 className="text-2xl text-center font-black mb-4">Edit Item</h1>
      <Formik>
        {() => (
          <form>
            <div className="px-3 my-4">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="product-name"
              >
                Product Name
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="product-name"
                type="text"
                placeholder={product.name}
              />
            </div>
            <div className="px-3 my-4">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  id="status"
                >
                  <option>Available</option>
                  <option>Not Available</option>
                </select>
                <div className="pointer-events-none absolute top-5 right-0 flex items-center px-2 text-grey-darker">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-3 my-4">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="price"
              >
                Price(USD)
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="price"
                type="text"
                placeholder={product.price}
              />
            </div>
            <div className="px-3 my-4">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="price"
              >
                Total Sold
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="price"
                type="text"
                placeholder={product.total_sold}
              />
            </div>
            <div className="px-3 my-4">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="price"
              >
                Total Revenue(USD)
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="price"
                type="text"
                placeholder={product.total_revenue}
              />
            </div>
          </form>
        )}
      </Formik>
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
