const SelectInput = ({ label, value, onChange }) => {
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
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
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
export default SelectInput;
