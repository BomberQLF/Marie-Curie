const Header = () => {
    return (
        <div className="p-12">
            <h1 className="uppercase text-white font-bold text-4xl">Marie Curie</h1>
            <h2 className="text-right font-thin text-white text-lg">Une vie de lumière et d'ombre</h2>
            <div className="mt-6">
                <div className="border border-white rounded-[22px] px-6 py-2 text-center">
                    <div><a className="text-white font-thin text-sm" href="#">Découvrir le trailer</a></div>
                </div>
            </div>
        </div>
    )
}

export default Header;