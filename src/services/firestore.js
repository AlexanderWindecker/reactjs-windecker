// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJteutJIO5fTR9NFWa_CtOpR7_0t0opLU",
  authDomain: "react-37555.firebaseapp.com",
  projectId: "react-37555",
  storageBucket: "react-37555.appspot.com",
  messagingSenderId: "745774296744",
  appId: "1:745774296744:web:f2d8e41b1de53f74f95c9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
  const miColleccion = collection(firestore, "tortas");
  let snapShotDB = await getDocs(miColleccion);

  let dataDocs = snapShotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}
export async function getItemsSingle(idParams) {
  const docRef = doc(firestore, "tortas", idParams);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(firestore, "tortas");
  const queryCategory = query(
    collectionRef,
    where("category", "==", catParams)
  );
  const snapShotDB = await getDocs(queryCategory);

  let dataDocs = snapShotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}

export default firestore;
