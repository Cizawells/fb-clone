// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBWe1-nDeVhgPfNSGMk4mFK5pYqDFeHs3A",
    authDomain: "fb-clone-f7763.firebaseapp.com",
    projectId: "fb-clone-f7763",
    storageBucket: "fb-clone-f7763.appspot.com",
    messagingSenderId: "426747923229",
    appId: "1:426747923229:web:8d7c14241654992215eff4",
    measurementId: "G-JELX2W17MQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth()

  
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;