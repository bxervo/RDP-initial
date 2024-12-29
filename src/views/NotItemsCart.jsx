import ALink from "../components/ALink";
import putCart from '../assets/putcart.svg'

export default function NotItemsCart() {
    return (<>
        <section className='w-full pt-20 px-2 flex justify-center items-center flex-col'>
            <img src={putCart} className='w-28 h-auto mb-3' alt="icono de error" />
            <h2 className='font-bold text-6xl mb-4'>Ups!</h2>
            <p className=''>You have no items in your cart</p>

            <ALink src='/books' className='underline mt-6'>Go Books</ALink>
        </section>
    </>);
}