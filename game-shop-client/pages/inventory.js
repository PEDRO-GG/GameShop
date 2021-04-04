import Head from "next/head";

const Inventory = () => {
  //Fetch from a server
  return (
    <div className="col-span-7">
      <Head>
        <title>GameShop | Inventory</title>
      </Head>
      <main className="bg-white min-h-full">
        <h1>route: /inventory</h1>
      </main>
    </div>
  );
};

export default Inventory;
