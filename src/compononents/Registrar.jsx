import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseInit';

export const Registrar = () => {
	const obtenerRegistros = async () => {
		const data = [];
		const querySnapshot = await getDocs(collection(db, 'pinturas'));
		querySnapshot.forEach((doc) => {
			console.log(doc.data());
			data.push(doc.data());
		});
		console.log(querySnapshot);
		console.log(data);
		return data;
	};

	const [registrosLogin, setRegistrosLogin] = useState(obtenerRegistros());

	const [titulo, setTitulo] = useState('');
	const [estilo, setEstilo] = useState('');
	const [tecnica, setTecnica] = useState('');
	const [precio, setPrecio] = useState('');

	const botonGuardar = (e) => {
		e.preventDefault();
		console.log('asasdas');
		try {
			const docRef = addDoc(collection(db, 'pinturas'), {
				titulo,
				estilo,
				tecnica,
				precio,
			});
			console.log('Document written with ID: ', docRef.id);
			limpiarFormulario();
		} catch (error) {
			console.error('Error adding document: ', error);
		}
	};

	function limpiarFormulario() {
		setTitulo('');
		setEstilo('');
		setTecnica('');
		setPrecio('');
		document.getElementById('miFormulario').reset();
	}

	return (
		<div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
			<div className="h3">
				Formulario De Registro De Pinturas
				<br />
				<form id="miFormulario">
					<div className="row" style={{ marginTop: 20 }}>
						<div className="col-6">
							<input
								className="form-control form-control-lg text-center"
								type="text"
								placeholder="Digite El Título"
								onChange={(e) => setTitulo(e.target.value)}
								required
							/>
						</div>

						<div className="col-6">
							<select
								className="form-select form-select-lg text-center"
								onChange={(e) => setEstilo(e.target.value)}
								required
							>
								<option value="">Indique Estilo</option>
								<option value="Retrato">Retrato</option>
								<option value="Paisaje">Paisaje</option>
								<option value="Desnudo">Desnudo</option>
							</select>
						</div>
					</div>

					<div className="row" style={{ marginTop: 20 }}>
						<div className="col-6">
							<select
								className="form-select form-select-lg text-center"
								onChange={(e) => setTecnica(e.target.value)}
								required
							>
								<option value="">Indique Técnica</option>
								<option value="Óleo">Óleo</option>
								<option value="Acrílico">Acrílico</option>
								<option value="Pastel">Pastel</option>
							</select>
						</div>
						<div className="col-6">
							<input
								className="form-control form-control-lg text-center"
								type="number"
								min="1"
								max="100000000"
								placeholder="Digite El Precio"
								onChange={(e) => setPrecio(e.target.value)}
								required
							/>
						</div>
					</div>

					<div className="row" style={{ marginTop: 20 }}>
						<div className="col">
							<button className="btn btn-primary btn-lg" onClick={botonGuardar}>
								Guardar Datos
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
