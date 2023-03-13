import React, { useState, useEffect } from 'react';

export default function Paciente({ paciente, setPaciente, eliminarPaciente }) {
	const { nombre, propietario, email, date, sintomas, id } = paciente;

	const handleEliminar = () => {
		console.log("eliminando... ");

		const respuesta = confirm('Deseas eliminar ese paciente?');

		if (respuesta) {
			eliminarPaciente(id);
		}

	}

	
	return (
		<div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
			<p className="font-bold mb-3 text-gray-700 upercase">
				Nombre: {''}
				<span className="font-normal normal-case">{nombre}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 upercase">
				Propietario: {''}
				<span className="font-normal normal-case">{propietario}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 upercase">
				Email: {''}
				<span className="font-normal normal-case">{email}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 upercase">
				Alta: {''}
				<span className="font-normal normal-case">{date}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 upercase">
				Sintomas: {''}
				<span className="font-normal normal-case">
					{sintomas}
				</span>
			</p>


			<div className="flex justify-between mt-10">
				<button 
					type="button"
					className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
					onClick={ () => setPaciente(paciente) }
				>	
					Editar
				</button>
				<button 
					type="button"
					className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
					onClick={ handleEliminar }
				>	
					Eliminar
				</button>
			</div>


		</div>

	)
}
