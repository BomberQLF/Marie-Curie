const BilletTarif = ({ ticketName, price, counter, increment, decrement }) => {
  return (
    <div>
      <div className="p-4 flex flex-col gap-2 lg:gap-12 w-fit border border-white border-solid rounded-[22px] mb-4 md:flex-row md:gap-36 lg:gap-48 lg:mb-16">
        <div className="w-[13rem]">
          <p className="text-white text-sm md:text-xl lg:w-[14rem]">{ticketName}</p>
          <p className="text-white text-sm md:text-xl">{price}</p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={decrement} className="bg-gray-300 px-4 md:px-3 md:py-1 lg:py-2 lg:px-4 rounded">
            -
          </button>
          <p className="text-white">{counter}</p>
          <button onClick={increment} className="bg-gray-300 px-4 md:px-3 md:py-1 lg:py-2 lg:px-4 rounded">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default BilletTarif;
