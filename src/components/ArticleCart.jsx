import ALink from "./ALink";
import { RiCloseLargeLine } from "react-icons/ri";
import { contextApp } from "../context/contextApp";
import { useContext } from "react";
export default function ArticleCart({ data }) {
    
    const { clickRemoveCart } = useContext(contextApp)

    return (<>
        <article className="my-2 grid grid-cols-[36px_36px_minmax(0,_1fr)_100px] gap-4 place-items-center w-full shadow-md border border-gray-200 p-2 rounded-md">
            <button onClick={() => clickRemoveCart(data.id)} type="button">
                <RiCloseLargeLine className="w-5 h-5" />
            </button>
            <ALink src={'/books/' + data.id}>
                <img src={data.formats['image/jpeg']} alt={data.title} />
            </ALink>
            <ALink src={'/books/' + data.id} className='justify-self-start'>
                <h2 className="max-w-full block text-ellipsis whitespace-nowrap overflow-hidden text-lg">
                    {data.title}
                    <span className='block italic text-sm'>{data.authors.length > 0 ? data.authors[0].name : 'Sin autor'}</span>
                </h2>
            </ALink>
            <p className="font-bold text-xl">$80.00</p>
        </article>
    </>);
}