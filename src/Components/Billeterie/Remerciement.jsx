import { useTranslation } from 'react-i18next';
import Logo from '../../../public/assets/visiorama.svg';
import { Link } from 'react-router-dom';

const Remerciement = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col justify-between h-full">
            <div className='flex justify-center'>
                <img src={Logo} alt="Logo Agence" />
            </div>
            <div className='pt-2'>
                <p className='text-center text-white font-thin text-sm md:text-xl'>{t("remerciement1")}</p>
                <br />
                <p className='text-center text-white font-thin text-sm md:text-xl'>{t("remerciement2")}</p>
                <br />
                <p className='text-center text-white font-thin text-sm md:text-xl'>{t("remerciement3")}</p>
            </div>
            <div>
                <Link to="/">
                    <div className='text-center text-sm px-[1rem] py-[.5rem] rounded-[22px] text-black bg-white md:text-xl'>{t("confirmer_accueil")}</div>
                </Link>
            </div>
        </div>  
    )
}

export default Remerciement;