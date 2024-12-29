import { useContext } from "react";
import { contextApp } from "../context/contextApp";


export default function BookShow({ data }) {

    const { clickAddCart } = useContext(contextApp)

    return (<>
        <section className="w-full px-3 py-4 ">

            <div className="grid grid-cols-[250px_minmax(0,_1fr)] gap-2">

                <div className="">
                    <img className="block m-auto object-cover w-[90%] h-auto"
                        src={data.formats['image/jpeg']}
                        alt={data.title} />
                </div>
                <div className="mt-5 pl-4">
                    
                    <span className="text-xs">ID: {data.id}</span>
                    <h5 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                    <span className="font-bold text-base">Authors</span>
                    <ul className="mb-3">
                        {data.authors.length > 0 ?
                            data.authors.map((autor, index) => (
                                <li key={index}>{autor.name} ({autor.birth_year+' - '+autor.death_year})</li>
                            ))
                            : <li>No hay autores</li>
                        }
                    </ul>
                    <p className="text-sm">
                        <span className="font-bold">Language:</span> {data.languages.join()}
                    </p>
                    <p className="text-sm">
                        <span className="font-bold">Books sold:</span> {data.download_count}
                    </p>
                    <div className="flex justify-start gap-6 items-center mt-8">
                        <p className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">$80.00</p>
                        <button onClick={() => clickAddCart(data)} className="rounded-md py-1.5 bg-amber-800 text-white px-5" type="button">Add</button>
                    </div>
                </div>
            </div>

        </section>
    </>);
}