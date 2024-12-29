import Lateral from "../views/Lateral";
import Search from "../views/Search";

export default function LayBooks({children}) {
    
    return (<>
        <div className="h-screen grid grid-cols-[250px_minmax(0,_1fr)]">
            <Lateral />
            <div>
                <Search />
                {children}
            </div>
        </div>
    </>);
}