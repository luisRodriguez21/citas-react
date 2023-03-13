import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPacientes from "./components/ListPacientes";



export default function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    

    useEffect(() => {
        const obtenerLS = () => {
          const pacientesLS = JSON.parse(localStorage.getItem('pacientes'));
          setPacientes(pacientesLS)
        }
        obtenerLS();
      }, []);


    useEffect(() => { // se ejecuta al detectar cambios en la lista de pacientes
        localStorage.setItem('pacientes',JSON.stringify(pacientes));
    }, [pacientes]);


    const eliminarPaciente = (id) => {
        const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id); // filtra lista de paciente y obtiene solo el que tiene el mismo id
        setPacientes(pacientesActualizados);
    }


    console.log("pacientessssssssssssss: ",pacientes);


    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className="mt-12 md:flex ">
                <Form 
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente} 
                    setPaciente={setPaciente}
                />
                <ListPacientes 
                    pacientes={pacientes} 
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />    
            </div>
                    
        </div>
    );
}

