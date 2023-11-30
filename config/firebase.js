
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getFirestore,doc, onSnapshot} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyB2iGqDbwrVdgVPzU-UaLeN21jebJM70VE",
    authDomain: "careemproject-71206.firebaseapp.com",
    projectId: "careemproject-71206",
    storageBucket: "careemproject-71206.appspot.com",
    messagingSenderId: "391565061184",
    appId: "1:391565061184:web:c7375fe7aa1fbd6e9b43a5",
    measurementId: "G-TG4WPZLGLP"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)



async function addARide({ pickup, destination, carType, fare, status }) {
    try {
       const doc = await addDoc(collection(db, "rides"), {
            pickup, destination, carType, fare, status
        });
        return doc.id
    } catch (e) {
        alert(e.message)
    }
}




export { addARide,doc, onSnapshot,db }