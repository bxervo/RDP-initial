import { useContext } from 'react';
import imgValid from '../assets/check.svg'
import { contextApp } from '../context/contextApp';
import NotItemsCart from './NotItemsCart';
import ALink from '../components/ALink';
export default function ValidPay() {

    const { cart , clickCleanCart } = useContext(contextApp);

    if (cart.length > 0) {
        return (<>
            <section className='w-full pt-20 px-2 flex justify-center items-center flex-col'>
                <img src={imgValid} className='w-28 h-auto mb-3' alt="icono de success" />
                <h2 className='font-bold text-6xl mb-4'>Success</h2>
                <p className=''>Your purchase will arrive soon</p>

                <ALink src='/books'>
                    <button onClick={() => clickCleanCart()} className='underline mt-6'>Go Books</button>
                </ALink>
            </section>
        </>);
    } else {
        return (<>
            <NotItemsCart />
        </>);
    }
}