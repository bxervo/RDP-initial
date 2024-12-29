import MainRoute from '../routes/MainRoute'
import { contextApp } from '../context/contextApp';
import useConsult from "../hooks/useConsult";
import { useEffect, useState } from "react";

export default function App() {

    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.toString() ? '?' + queryParams.toString() : '';

    const [params, setParams] = useState(paramValue);
    const [cart, setCart] = useState([]);
    const [listBooks, setListBooks] = useState({ "results": [] });
    const jsonData = useConsult('https://gutendex.com/books' + params, params, setListBooks);

    const clickAddCart = (data) => {
        setCart([...cart, data]);
    }

    const clickAddParams = () => {
        setTimeout(() => {
            let newParams = new URLSearchParams(location.search);
            let newValue = newParams.toString() ? '?' + newParams.toString() : '';
            console.log(params, ' vs ', newValue, ' = ', params != newValue)
            if (newValue != '' && params != newValue) {
                setParams(newValue)
                setListBooks({ "results": [] });
            };
        }, 100);
    }

    const clickRemoveCart = (id) => {
        let updateCart = cart.filter((i) => i.id !== id);
        setCart(updateCart);
    }

    const clickCleanCart = () => {
        setCart([]);
    }

    const inputSearchBook = (value) => {

        let newJson = {};

        if (value.length >= 2) {
            newJson.results = jsonData.results.filter((i) => i.title.toLowerCase().includes(value.toLowerCase()));
            setListBooks(newJson);
        } else {
            setListBooks(jsonData);
        }
    }

    return (<>
        <contextApp.Provider value={{ listBooks, cart, clickAddParams, clickAddCart, clickRemoveCart, clickCleanCart, inputSearchBook }} >
            <MainRoute />
        </contextApp.Provider>
    </>);

}