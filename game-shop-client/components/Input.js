const Input = ({ label, value, onChange, type }) => {
  return (
    <div className="px-3 my-4">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
      />
    </div>
  );
};
export default Input;
