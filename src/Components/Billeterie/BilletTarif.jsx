const BilletTarif = ({ ticketName, price, counter, increment, decrement }) => {
  return (
    <div>
      <div className="p-5 flex gap-12 w-fit border border-white border-solid rounded-[22px] mb-12">
        <div className="w-[11rem]">
          <p className="text-white">{ticketName}</p>
          <p className="text-white">{price}</p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={decrement} className="bg-gray-300 px-4 py-2 rounded">
            -
          </button>
          <p className="text-white">{counter}</p>
          <button onClick={increment} className="bg-gray-300 px-4 py-2 rounded">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default BilletTarif;
