import { useContext } from "react";
import { contextApp } from "../context/contextApp";
import ALink from "../components/ALink";
import { BsArrowLeft } from "react-icons/bs";
import FormDelivery from "../components/FormDelivery";
import ArticleCart from "../components/ArticleCart";
import NotItemsCart from "./NotItemsCart";


export default function ShoppingCart() {

    const { cart } = useContext(contextApp);


    if (cart.length > 0) {
        return (<>
            <section className="pt-6 px-2">
                <ALink src='/books' className="flex gap-2 items-center mb-6">
                    <BsArrowLeft /> Back
                </ALink>
                <div className="px-6 grid grid-cols-2">
                    <div className="border-r p-6">
                        <h3 className="font-bold text-4xl mb-6">Delivery</h3>
                        <FormDelivery />
                    </div>
                    <div className="px-6 flex flex-col justify-center items-start ">

                        {
                            cart.map((item, index) => (
                                <ArticleCart
                                    key={index}
                                    data={item}
                                />
                            ))
                        }

                        <div className="border-t mt-6 w-full border-gray-400 py-3">
                            <p className="text-right font-bold text-2xl px-7">Total: ${cart.length * 80}.00</p>
                            <ALink src='/cart/checkout' className="block mt-5 border bg-amber-800 text-white text-center py-2 px-5 rounded-lg">
                                Checkout
                            </ALink>
                        </div>
                    </div>
                </div>
            </section>
        </>);
    } else {
        return (<>
            <NotItemsCart />
        </>);
    }



}