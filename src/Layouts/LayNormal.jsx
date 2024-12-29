import Menu from "../components/Menu";

export default function LayNormal({children}) {
    
    return (<>
        <div className="h-screen">
            <Menu />
            {children}
        </div>
    </>);
}