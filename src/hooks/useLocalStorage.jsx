import { useState } from "react";

export default function useLocalStorage(nameLocal, initialValue) {
    const hasLocalStorage = localStorage.getItem(nameLocal);
    let setValueLocal;

    if (!hasLocalStorage) {
        localStorage.setItem(nameLocal, JSON.stringify(initialValue));
        setValueLocal = initialValue;
    } else {
        setValueLocal = JSON.parse(hasLocalStorage);
    }

    const [lcalStorage, setLcalStorage] = useState(setValueLocal);

    const saveLocalStorage = (newValueLocal) => {
        localStorage.setItem(nameLocal, JSON.stringify(newValueLocal));
        setLcalStorage(newValueLocal);
    };

    return [ lcalStorage , saveLocalStorage];
}