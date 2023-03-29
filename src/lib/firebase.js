import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJjyr2Shhel4iXPQ83BCIPABjN9inT7lc",
  authDomain: "intern-virtual-lab-project.firebaseapp.com",
  databaseURL: "https://intern-virtual-lab-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "intern-virtual-lab-project",
  storageBucket: "intern-virtual-lab-project.appspot.com",
  messagingSenderId: "496300520660",
  appId: "1:496300520660:web:ee2be588b4e4e03a137741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service

export const database = getFirestore(app);

// // Get a list of Accounts from database
// async function getAccounts(database) {
//     const accountsCol = collection(database, 'accounts');
//     const accountsSnapshot = await getDocs(accountsCol);
//     const accountsList = accountsSnapshot.docs.map(doc => doc.data());
//     return accountsList;
// }
// export const accountsList = getAccounts(database);

// // Get a list of Professions from database
// async function getProfessions(database) {
//     const professionsCol = collection(database, 'professions');
//     const professionsSnapshot = await getDocs(professionsCol);
//     const professionsList = professionsSnapshot.docs.map(doc => doc.data());
//     return professionsList;
// }
// export const professionsList = getProfessions(database);


// // Initialize Cloud Storage and get a reference to the service
// export const storage = getStorage(app);

