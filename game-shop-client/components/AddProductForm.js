import { useState } from "react";
import Input from "./Input";
import SelectInput from "./SelectInput";

const AddProductForm = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Available");
  const [totalSold, setTotalSold] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      price: price,
      status: status === "Available",
      total_sold: totalSold,
      total_revenue: totalRevenue,
    };
    //Make a POST request with the new data
    fetch(`http://localhost:3002/api/v1/products`, {
      method: "POST",
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

    setProducts([...products, data]);
  };

  return (
    <form onSubmit={onSubmit} className="flex">
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
  );
};

export default AddProductForm;
