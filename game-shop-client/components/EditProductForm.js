import { useState } from "react";
import { useRouter } from "next/router";
import SelectInput from "./SelectInput";
import Input from "./Input";
import { route } from "next/dist/next-server/server/router";

const EditProductForm = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [status, setStatus] = useState(
    product.status ? "Available" : "Not Available"
  );
  const [totalSold, setTotalSold] = useState(product.total_sold);
  const [totalRevenue, setTotalRevenue] = useState(product.total_revenue);
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      price: price,
      status: status === "Available",
      total_sold: totalSold,
      total_revenue: totalRevenue,
    };
    //Make a PUT request with the new data
    fetch(`http://localhost:3002/api/v1/products/${product.id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    //Redirect the user back to the inventory page
    router.push("/inventory");
  };
  return (
    <>
      <h1 className="text-2xl text-center font-black mb-4">Edit Item</h1>
      <form onSubmit={onSubmit}>
        <Input
          label="Product Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <Input
          label="Price(USD)"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="number"
        />
        <SelectInput
          label="Status"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        />
        <Input
          label="Total Sold"
          value={totalSold}
          onChange={(e) => {
            setTotalSold(e.target.value);
          }}
          type="number"
        />
        <Input
          label="Total Revenue(USD)"
          value={totalRevenue}
          onChange={(e) => {
            setTotalRevenue(e.target.value);
          }}
          type="number"
        />
        <button
          type="submit"
          className="block w-30 px-6 py-2 my-10 mx-auto text-xs font-medium leading-3 text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default EditProductForm;
