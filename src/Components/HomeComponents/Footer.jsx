import LogoVisiorama from "/assets/logoVisiorama.svg";
import Facebook from "/assets/Facebook.svg";
import Instagram from "/assets/Instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-24">
      <div className="flex flex-col items-center md:items-start gap-6 w-full">
        {/* Logo Visiorama */}
        <img
          src={LogoVisiorama}
          alt="Logo Visiorama"
          className="w-[200px] md:w-[300px] lg:w-[400px]"
        />

        {/* Conteneur principal */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-6">
          {/* Réseaux sociaux et site */}
          <div className="flex flex-col md:items-start">
            <div className="flex gap-4">
              <img src={Instagram} alt="Instagram" className="h-[40px] md:h-[50px]" />
              <img src={Facebook} alt="Facebook" className="h-[40px] md:h-[50px]" />
            </div>
            <p className="text-gray-300 mt-2">visiorama/agence.com</p>
          </div>

          {/* Mentions légales, CGV et Copyright */}
          <div className="flex flex-col md:items-start">
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-400">Mentions légales</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-400">Conditions générales de vente</a>
            </div>
            <p className="text-gray-500 mt-2">Tous droits réservés, VisiOrama © 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;