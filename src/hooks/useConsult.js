import { useEffect, useState } from 'react';

const useConsult = (url,state,setOtherState) => {

    const [allBooks, setAllBooks] = useState({"results":[]});

    useEffect(() => {
        const fetchRequest = async () => {
            let res = await fetch(url);
            let data = await res.json();
            setAllBooks(data);
            setOtherState(data);
        };
        fetchRequest();
    },[state]);

    return allBooks;
};

export default useConsult;