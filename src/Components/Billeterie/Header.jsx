const Header = ({ title, subtitle, step }) => {
  return (
    <>
      <header className="flex gap-4 items-start">
        <div>
          <h1 className="uppercase text-white text-2xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-white mb-[0.6rem] w-[14rem] text-xs mt-4 md:text-xl md:mt-8 md:w-[28rem] lg:mt-12 lg:text-xl xl:w-[54rem]">
            {subtitle}
          </p>
        </div>
        <p className="uppercase text-white rotate-90 absolute right-[-10px] top-[50px] md:right-[20px] md:text-xl lg:text-2xl lg:top-[90px]">{step}</p>
      </header>
    </>
  );
};

export default Header;
