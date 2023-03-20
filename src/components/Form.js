import { useState } from 'react'
import Select from 'react-select'

export default function Form({setClima}) {
    const [ciudad, setCiudad] = useState('')
    const [pais, setPais] = useState('')

    console.log()
    const options = [
        {value: "US", label: 'Estados Unidos'},
        {value: "MX", label: 'México'},
        {value: "AR", label: 'Argentina'},
        {value: "CO", label: 'Colombia'},
        {value: "CR", label: 'Costa Rica'},
        {value: "ES", label: 'España'},
        {value: "PE", label: 'Perú'},

    ]
    const buscarClima = (e) =>{
        e.preventDefault()
        const clima = {
            pais : pais,
            ciudad: ciudad,
        }
        setClima(clima)
    }
    // https://react-select.com/home
    return (
        <div className="col m6 s12 ">
            <form onSubmit={buscarClima} className='row'>
                <div className="input-field col s12">
                    <input
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        onChange={(e) => setCiudad(e.target.value)}
                    />
                    <label htmlFor="ciudad">Ciudad:</label>
                </div>
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