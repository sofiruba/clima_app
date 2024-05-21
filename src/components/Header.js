import { ClimaContext } from '../App'
import { useContext } from 'react'


export default function Header(date) {
    const Clima = useContext(ClimaContext)
    let pais = Clima.pais
    console.log(date)
    const dia = date.date.getDay()
    const mes = date.date.getMonth()
    const año = date.date.getFullYear()
    const q = `${dia} de ${mes} del ${año}`
    return (
        <div>
            <div >
                <a href="#!" className="title" >Clima en {pais}</a>
            </div>
            <div>
                <a> {q}</a>
            </div>
        </div>

    )
}