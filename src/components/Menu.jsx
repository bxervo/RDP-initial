import ALink from "../components/ALink";
import Logo from "../components/Logo";
export default function Menu() {
    
    return (<>
        <nav className='h-12 shadow py-2 px-5'>
            <ALink src='/' label='ir a home'>
                <Logo className='w-8 h-8 rounded-full' />
            </ALink>
        </nav>
    </>);
}