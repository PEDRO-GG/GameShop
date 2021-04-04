import Head from "next/head";

const UnitConverter = () => {
  //fetch a currency exchange rate api
  return (
    <div className="col-span-7">
      <Head>
        <title>GameShop | UnitConverter</title>
      </Head>
      <main className="bg-white min-h-full">
        <h1>route: /unitConverter</h1>
      </main>
    </div>
  );
};

export default UnitConverter;
