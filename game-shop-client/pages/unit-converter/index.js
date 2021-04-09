import Head from "next/head";

const UnitConverter = ({ data }) => {
  const rates = data.rates; //rates holds an object with many currency rates
  //Any HTML in the return() below will be displayed to the webpage
  return (
    <>
      <Head>
        <title>GameShop | UnitConverter</title>
      </Head>
      <h1>Here are all the available rates:</h1>
      <pre>{JSON.stringify(rates, null, 2)}</pre>
    </>
  );
};

//Fetch currency exchange rates and pass them to the component above
export async function getStaticProps(context) {
  const res = await fetch(`https://api.ratesapi.io/api/latest`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default UnitConverter;
