import { useParams } from "react-router-dom";
import useConsult from "../hooks/useConsult";
import BookShow from "../components/BookShow";
import ALink from "../components/ALink";
import { BsArrowLeft } from "react-icons/bs";

export default function BookView() {

    const { idBooks } = useParams();
    const oneBook = useConsult('https://gutendex.com/books?ids=' + idBooks, idBooks);

    if (oneBook.results) {
        return (<>
            <section className="mt-6 px-6">
                <ALink src='/books' className="flex gap-2 items-center mb-6">
                    <BsArrowLeft /> Back
                </ALink>
                {   
                    oneBook.results.length > 0 ? (
                        oneBook.results.map((book, index) => (
                            <BookShow 
                                key={index}
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