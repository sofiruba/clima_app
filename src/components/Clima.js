import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ClimaContext } from '../App'

export default function Clima() {
    const [temp, setTemp] = useState({temp: 0, temp_min: 0, temp_max: 0})
    const Clima = useContext(ClimaContext)
    let ciudad = Clima.ciudad.charAt(0).toUpperCase() + Clima.ciudad.slice(1);
    const q =  `${ciudad},${Clima.pais}`

    let cont =document.getElementById('error')
    const getClima = () => {
        return axios.get('http://api.openweathermap.org/data/2.5/weather', {params:{q : q, APPID: '467eb2e2a1738c82e813a30610d7c354' }})
        .then(res => {
            if(res.status === 200){
                setTemp(res.data.main)
                cont.innerText= ''
            }

        })
        .catch(err => {

            if (err.response.status === 404 ){
                cont.innerText = 'Vuelve a ingresar correctamente'
                cont.style.color = 'red'
            }
            if (err.response.status === 400 ){
                cont.innerText = 'Debes ingresar'
                cont.style.color = 'red'
            }
        }
            )
    }

    useEffect(()=> {
        getClima()
    })
    return (
        <div className="col m6 s12">
            <div className="card-panel white col s12">
                <div className="black-text">
                    <h2>El clima de {ciudad} es:</h2>
                    <p className="temperatura">
                        <span> {parseFloat(temp.temp - 273.15).toFixed(2)} &#x2103; </span>
                    </p>
                    <p>
                        Temperatura Maxima
                        <span> {parseFloat(temp.temp_max - 273.15).toFixed(2)} &#x2103; </span>
                    </p>
                    <p>
                        Temperatura Minima 
                         <span> {parseFloat(temp.temp_min - 273.15).toFixed(2)} &#x2103;   </span>
                    </p>
                    <div >
                        <p id='error'></p>
                    </div>
                </div>
            </div>
        </div>
    )
}