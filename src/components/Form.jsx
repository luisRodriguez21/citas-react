import React, { useState, useEffect } from 'react';
import Error from './Error';


export default function Form({ pacientes, setPacientes, paciente, setPaciente }) {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);



    
    useEffect(() => { // puede haber varios useEffect
        if (Object.keys(paciente).length > 0) {
            console.log("si hay cambio");
            console.log("paciente actual: ",paciente);
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setDate(paciente.date);
            setSintomas(paciente.sintomas);

        }
    }, [paciente]); // aqui revisa que la varieble cambiem, solo si cambió vuelve a renderizar




    const generarID = () => {
        const random = Math.random().toString(36).substr(2);
        const timeStamp = Date.now().toString(36);

        return timeStamp + random;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, date, sintomas].includes('')) {
            console.log("hay campos vacios");
            setError(true); 
            return; // si hay algo vacio termina la función
        } 

        const objPaciente = { 
            nombre, 
            propietario, 
            email, 
            date, 
            sintomas
        }


        if (paciente.id) {
            console.log("editando");
            objPaciente.id = paciente.id;
            console.log("objPaciente: ",objPaciente);

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState); // recorre los pacientes y toma el que tiene el mismo id que se esta editanto
            setPacientes(pacientesActualizados);
            setPaciente({}); // funcion pasada por props | actualizamos paciente  
        } else {
            console.log("creando");
            objPaciente.id = generarID();
            setPacientes([...pacientes, objPaciente]);
        }


        setError(false);

        setNombre('');
        setPropietario('');
        setEmail('');
        setDate('');
        setSintomas('');
    }



    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={ handleSubmit } >
                
                { error && <Error><p>Todos los campos son oblgatorios</p></Error> }

                <div className="mb-5">
                    <label htmlFor="name" className="block text-gray-700 uppercase font-bold">Nombre de mascota</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Nombre de mascota" 
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md" 
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
                    <input 
                        type="text" 
                        id="propietario" 
                        placeholder="Propietario" 
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md "
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="Email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input 
                        type="email" 
                        id="Email"
                        placeholder="Email contacto" 
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md " 
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input 
                        type="date" 
                        id="date" 
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md " 
                        value={date}
                        onChange={ (e) => setDate(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
                    <textarea 
                        id="sintomas" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        placeholder='Describe los síntomas' 
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>

                <input 
                    type="submit" 
                    className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-all" 
                    value={paciente.id ? "Guardar cambios" : "Agregar paciente"}
                />
                

            </form>
        </div>
    )   
}

