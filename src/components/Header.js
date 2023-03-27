import { ClimaContext } from '../App'
import { useContext } from 'react'


export default function Header() {
    const Clima = useContext(ClimaContext)
    let ciudad = Clima.ciudad.charAt(0).toUpperCase() + Clima.ciudad.slice(1);
    return (
        <div >
            <a href="#!" className="title" >Clima en {ciudad}</a>
        </div>
    )
}