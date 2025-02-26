const Header = ({ title, subtitle }) => {
    return (
        <header>
            <h1 className="uppercase text-white text-2xl md:text-4xl lg:text-5xl">{title}</h1>
            <p className="text-white text-xs mt-4 md:text-xl md:mt-8 lg:mt-12 lg:text-xl">{subtitle}</p>
        </header>
    );
}

export default Header;