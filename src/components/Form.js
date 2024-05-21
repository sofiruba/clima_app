import { useState } from 'react'
import Select from 'react-select'

export default function Form({setClima}) {
    const [pais, setPais] = useState('')
    let paises = require('../paises.json')
    console.log()
    let options = paises.countries.map(pais => ({value: pais.name, label: pais.name}))
    console.log(options)
    const buscarClima = (e) =>{
        e.preventDefault()
        const clima = {
            pais : pais
        }
        setClima(clima)
    }
    // https://react-select.com/home
    return (
        <div className="col m6 s12 ">
            <form onSubmit={buscarClima} className='row'>
                
                <div className="input-field col s12">
                <label htmlFor="pais">Pais:</label>
                    <Select onChange={v => setPais(v.value)} placeholder="Seleccionar un pais" options={options}  className='select'></Select>
                </div>
                <div className="input-field col s12">
                    <input
                        type="submit"
                        value="Buscar Clima"
                        className="waves-effect waves-light btn-large btn-block blue accent-4"
                    />
                </div>
            </form>
        </div>

    )
}