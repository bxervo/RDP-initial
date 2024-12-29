import imgrelato from '../assets/icono-rdp.png'

export default function Logo({className}) {
    
    return (<>
        <img className={className} src={imgrelato} alt='logo relatos de papel' />
    </>);
}