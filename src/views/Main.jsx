import { ImSpinner6 } from "react-icons/im";
import useRedirection from "../hooks/useRedirection";
import { Link } from 'react-router-dom';
import Logo from "../components/Logo";
export default function Main(){

    const urlRedirect = '/books';

    useRedirection(urlRedirect, 5000);

    return (<>
         <section className='h-full w-full flex flex-col justify-center items-center'>
            <Logo />
            <ImSpinner6 className='animate-spin w-12 h-12 mb-2' />
            <Link to={urlRedirect} className='border bg-amber-800 text-white py-2 px-5 rounded-lg'>
                Entrar Ahora
            </Link>
         </section>
    </>);
}