import { useContext, useEffect } from "react";
import ALink from "../components/ALink";
import Logo from "../components/Logo";
import { contextApp } from "../context/contextApp";


export default function Lateral() {

    const { clickAddParams } = useContext(contextApp);

    return (<>
    
        <section className="h-full border-r border-r-gray-300 border-solid px-2 pt-4 flex flex-col items-center">
            <ALink src='/' label='ir a home'>
                <Logo className='w-28 h-28 rounded-full' />
            </ALink>
            <div className="w-full flex flex-col items-start mt-4 pl-3">
                <h3 className="font-bold text-lg">Language</h3>
                <ALink src='/books?languages=es' className="pl-2 py-1" label='buscar libros en Spanish' onClick={clickAddParams}>Spanish</ALink>
                <ALink src='/books?languages=en' className="pl-2 py-1" label='buscar libros en English' onClick={clickAddParams}>English</ALink>
                <ALink src='/books?languages=fr' className="pl-2 py-1" label='buscar libros en French' onClick={clickAddParams}>French</ALink>
            </div>
            <div className="w-full flex flex-col items-start mt-4 pl-3">
                <h3 className="font-bold text-lg">Books per century</h3>
                <ALink src='/books?author_year_start=1800&author_year_end=1899' className="pl-2 py-1" onClick={clickAddParams}>XIX</ALink>
                <ALink src='/books?author_year_start=1900&author_year_end=1999' className="pl-2 py-1" onClick={clickAddParams}>XX</ALink>
                <ALink src='/books?author_year_start=2000&author_year_end=2099' className="pl-2 py-1" onClick={clickAddParams}>XXI</ALink>
            </div>
        </section>

    </>);
} 