import {
	createUserWithEmailAndPassword,
	updateProfile,
	signOut,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseInit';

function createAccount(email, password, name) {
	createUserWithEmailAndPassword(auth, email, password)
		.then((crendencialUsuario) => {
			updateProfile(crendencialUsuario.user, { displayName: name });
		})
		.catch((err) => alert(err));
}

function inisiar_Sesion(email, password) {
	signInWithEmailAndPassword(auth, email, password).catch((err) => alert(err));
}

function registrar(email, password, name) {
	createUserWithEmailAndPassword(auth, email, password)
		.then((crendencialUsuario) => {
			updateProfile(crendencialUsuario.user, { displayName: name });
			signOut();
		})
		.catch((err) => alert(err));
}

export { createAccount, inisiar_Sesion, registrar };
