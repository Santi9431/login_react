import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseInit';

export const Listar = () => {
	const [arrayDatos, setArrayDatos] = useState([]);

	async function obtenerRegistros() {
		const data = [];
		const querySnapshot = await getDocs(collection(db, 'pinturas'));
		querySnapshot.forEach((doc) => {
			data.push({ docId: doc.id, ...doc.data() });
		});

		setArrayDatos([...arrayDatos, ...data]);
	}

	const botonEliminar = async (miIndex) => {
		if (window.confirm('¿Está seguro que quiere eliminar el registro?')) {
			const registroFiltrados = arrayDatos.filter((e, index) => {
				return miIndex !== index;
			});
			const docId = arrayDatos[miIndex].docId;
			await deleteDoc(doc(db, 'pinturas', docId));
			setArrayDatos(registroFiltrados);
		}
	};

	useEffect(() => {
		obtenerRegistros();
	}, []); // Empty dependency array to run the effect only once on component mount

	return (
		<div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
			<div className="h3">Listado De Registro </div>

			<div className="table-responsive">
				{arrayDatos.length > 0 ? (
					<>
						<table
							className="table table-bordered table-hover table-dark"
							style={{ marginTop: 12 }}
						>
							<thead
								className="text-center"
								style={{ background: 'lightgray' }}
							>
								<tr>
									<th>#</th>
									<th>Título</th>
									<th>Estilo</th>
									<th>Técnica</th>
									<th>Precio</th>
									<th>X</th>
								</tr>
							</thead>
							<tbody className="text-center align-baseline">
								{arrayDatos.map((x, index) => (
									<tr key={index}>
										<th>{index + 1}</th>
										<td>{x.titulo}</td>
										<td>{x.estilo}</td>
										<td>{x.tecnica}</td>
										<td>{x.precio}</td>
										<td className="text-center">
											<button
												className="btn btn-outline-danger"
												onClick={() => botonEliminar(index)}
											>
												<i className="bi bi-trash"></i>
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</>
				) : (
					<p className="h5" style={{ color: 'red' }}>
						"No hay registros para mostrar"
					</p>
				)}
			</div>
		</div>
	);
};
