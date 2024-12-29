import Book from "../components/Book";
import { useContext } from "react";
import { contextApp } from "../context/contextApp";


export default function Books() {

    const {listBooks} = useContext(contextApp);

    if (listBooks.results) {
        return (<>
            <section className="flex justify-around flex-wrap items-center gap-5 mt-6 px-6">
    
                {   
                    listBooks.results.length > 0 ? (
                        listBooks.results.map((book, index) => (
                            <Book 
                                key={index}
                                link={'/books/'+book.id}
                                title={book.title}
                                authors={book.authors.length > 0 ? book.authors[0].name : 'Sin autor'}
                                imagen={book.formats['image/jpeg']}
                                data={book}
                            />
                        ))
                    ) : (
                        <div>Loading Results.....</div>
                    )
                }
            </section>
        </>);

    } else {
    
        return (<>
            <section className="flex justify-start items-center mt-6 px-6">
                <p>No results found</p>
            </section>
        </>);
    }

    
}