const SelectBase = ({ label, value, onChange }) => {
    return (
      <div className="px-3 my-4">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
          {label}
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
            value={value}
            onChange={onChange}
          >
            <option value="AUD">Australian Dollar</option>
            <option value="BGN">Bulgarian Lev</option>
            <option value="BRL">Brazilian Real</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="CNY">Chinese Yuan Renminbi</option>
            <option value="HRK">Croatian Kuna</option>
            <option value="CZK">Czech Koruna</option>        
            <option value="DKK">Danish Krone</option>
            <option value="EUR">Euro</option>
            <option value="GBP">Great British Pound</option>
            <option value="HKD">Hong Kong Dollar</option>
            <option value="HUF">Hungarian Forint</option>
            <option value="ISK">Icelandic Krona</option>
            <option value="INR">Indian Rupee</option>       
            <option value="IDR">Indonesian Rupiah</option>
            <option value="ILS">Israeli Shekel</option>
            <option value="JPY">Japanese Yen</option>
            <option value="MYR">Malaysian Ringgit</option>
            <option value="MXN">Mexican Peso</option>
            <option value="NZD">New Zealand Dollar</option>
            <option value="NOK">Norwegian Krone</option>
            <option value="PHP">Philipine Peso</option>
            <option value="PLN">Polish Zloty</option>
            <option value="RON">Romanian Leu</option>
            <option value="RUB">Russian Rouble</option>
            <option value="SGD">Singapore Dollar</option>
            <option value="ZAR">South African Rand</option>
            <option value="KRW">South Korean Won</option>
            <option value="SEK">Swedish Krona</option>
            <option value="CHF">Swiss Franc</option>
            <option value="THB">Thai Baht</option>
            <option value="TRY">Turkish Lira</option>
            <option value="USD">US Dollar</option>

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
    );
  };
  export default SelectBase;