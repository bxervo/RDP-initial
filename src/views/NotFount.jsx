import exclam from '../assets/exclam.svg'
import ALink from '../components/ALink';
export default function NotFount(){
    return (<>
         <section className='w-full flex justify-center items-center flex-col pt-20'>
            <img src={exclam} className='w-28 h-auto mb-3' alt="icono de error" />
            <h2 className='font-bold text-6xl mb-4'>Ups!</h2>
            <p className=''>Page not found</p>

            <ALink src='/' className='underline mt-6'>Go home</ALink>
         </section>
    </>);
}