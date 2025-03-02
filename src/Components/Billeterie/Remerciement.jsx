import Logo from '../../../public/assets/visiorama.svg';
import { Link } from 'react-router-dom';

const Remerciement = () => {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className='flex justify-center'>
                <img src={Logo} alt="Logo Agence" />
            </div>
            <div className='pt-2'>
                <p className='text-center text-white font-thin text-sm md:text-xl'>Nous vous remercions d'avoir réservé vos places pour l'exposition Marie Curie, Une vie de lumière et d'ombre. Votre billet vous sera envoyé par email à l'adresse que vous nous avez fournie.
                Pour toute question ou besoin d'assistance, n'hésitez pas à nous contacter à l'adresse suivante : agence.visiorama@gmail.com.</p>
                <br />
                <p className='text-center text-white font-thin text-sm md:text-xl'>Les billets sont remboursables uniquement si la demande est effectuée au moins 48 heures avant l'événement, par email à l'adresse indiquée ci-dessus.</p>
                <br />
                <p className='text-center text-white font-thin text-sm md:text-xl'>Nous avons hâte de vous accueillir ! À très bientôt.</p>
            </div>
            <div>
                <Link to="/">
                    <div className='text-center text-sm px-[1rem] py-[.5rem] rounded-[22px] text-black bg-white md:text-xl'>Revenir à l'accueil</div>
                </Link>
            </div>
        </div>  
    )
}

export default Remerciement;