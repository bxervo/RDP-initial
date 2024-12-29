import { useContext } from "react";
import ALink from "./ALink";
import { contextApp } from "../context/contextApp";


export default function Book({ data, link, title, authors, imagen }) {

    const { clickAddCart } = useContext(contextApp)

    return (<>
        <article className="w-full max-w-56 bg-white border border-gray-200 rounded-md px-3 py-4 shadow">
            <div className="h-[144px]">
                <ALink src={link}>
                    <img className="block m-auto object-cover w-full rounded-t-lg md:h-auto md:w-24 md:rounded-none md:rounded-s-lg"
                        src={imagen}
                        alt={title} />
                </ALink>
            </div>
            <div className="mt-5 h-[76px] overflow-hidden">
                <ALink src={link}>
                    <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900">{title}</h5>
                </ALink>
                <p className="mb-3 text-sm font-normal text-gray-700">{authors}</p>
            </div>
            <div className="flex justify-between items-center mt-5">
                <p className="mb-2 text-lg font-bold tracking-tight text-gray-900">$80.00</p>
                <button onClick={() => clickAddCart(data)} className="rounded-md py-1.5 bg-amber-800 text-white px-5" type="button">Add</button>
            </div>
        </article>
    </>);
}