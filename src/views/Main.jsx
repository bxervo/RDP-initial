import exclam from '../assets/exclam.svg'
export default function NotFount(){
    return (<>
         <section>
            <img src={exclam} alt="icono de error" />
            <h2>uh ohhh!</h2>
            <p>Página no encontrada</p>
         </section>
    </>);
}