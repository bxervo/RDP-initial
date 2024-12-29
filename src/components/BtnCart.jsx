import { useContext } from "react";
import { contextApp } from "../context/contextApp";
import ALink from "./ALink";
import {BsCart4} from "react-icons/bs";



export default function BtnCart({src, className}) {

    const { cart } = useContext(contextApp);


    return (<>
        <ALink src={src} className={className}>
            {cart.length > 0 ? 
                <span className="absolute top-[-50%] right-[-50%] bg-amber-800 text-white leading-none py-1 px-[0.38rem] font-bold text-[10px] rounded-full">
                    {cart.length}
                </span> : ''}
            <BsCart4 className="h-5 w-5" />
        </ALink>
    </>);
}