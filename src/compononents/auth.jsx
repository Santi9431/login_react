import { createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebaseInit"

function createcount(email , password , name) {
    createUserWithEmailAndPassword(auth,email, password)
    .then((crendencialUsuario) => {
        updateProfile(crendencialUsuario.user, {displayName:name})
        signOut();
    }
    ).catch((err)=>alert(err));  
}

function inisiar_Sesion(email, password){
    signInWithEmailAndPassword(auth, email, password)
    .catch((err) =>alert(err));
}

export {createcount, inisiar_Sesion}


