import { BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { contextApp } from "../context/contextApp";
import CartBtn from "../components/CartBtn";

export default function Search() {

    const { inputSearchBook } = useContext(contextApp)

    return (<>
        <div className="h-12 shadow py-2 px-5 grid grid-cols-[minmax(0,_1fr)_100px]">
            <div className="relative">
                <BsSearch className="absolute top-2/4 left-2 translate-y-[-50%] h-5 w-5" />
                <input className="w-full bg-white border border-gray-300 rounded-md py-1 pl-10"
                    onChange={e => inputSearchBook(e.target.value)}
                    type="text" name="" placeholder="Find a Book" id="" />
            </div>
            <CartBtn src='/cart' className="relative self-center place-self-center" />
        </div>
    </>);
}