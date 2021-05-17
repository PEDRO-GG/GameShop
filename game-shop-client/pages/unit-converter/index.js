import Head from "next/head";
import SelectBase from "../../components/SelectBase";

let selectedBase = "USD";

const UnitConverter = ({ data }) => {
  //data.base = "USD";


  const rates = data.rates; //rates holds an object with many currency rates
  const ratesStr = JSON.stringify(rates, null, 2); //converts rates into string

  let ratesArr = ratesStr.split('\n'); //converts rates string into array
  let newRatesArr = [];
  for (let i = 1; i < ratesArr.length - 1; i++) {
    const id_ = ratesArr[i].substring(3, 6);
    const conversion_ = parseFloat(ratesArr[i].substring(9)).toLocaleString('en-US', { maximumFractionDigits: 2 });
    //toLocaleString formats parsed float to 2 decimal places and adds commas where appropriate
    if (id_ === data.base) { //if rate is base, list it first
      newRatesArr.unshift({
        id: id_,
        conversion: conversion_
      });
    } else { //otherwise, add to end
      newRatesArr.push({
        id: id_,
        conversion: conversion_
      });
    }
  }

  const baseChanged = base => {
    console.log(base);
  };

  //Any HTML in the return() below will be displayed to the webpage
  return (
    <>
      <Head>
        <title>GameShop | UnitConverter</title>
      </Head>
      <h1>Here are all the available rates as of {data.date}:</h1>
      <SelectBase
        label="Base"
        value={data.base}
        onChange={(e) => {
          //console.log(e);
          baseChanged(e.target.selectedOptions[0].value);
        }}
        />
      <table>
        <tbody>
          <tr>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Currency
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Conversion
            </th>
          </tr>
          {newRatesArr.map((rate) => {
            return (
              <tr key = {rate.id}>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <b>{rate.id}</b>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  {rate.conversion}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

//Fetch currency exchange rates and pass them to the component above
export async function getServerSideProps(context) {
  console.log(context);
  const res = await fetch(`https://api.ratesapi.io/api/latest?base=${selectedBase}`);
  const data = await res.json();
  console.log(context);
  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default UnitConverter;
