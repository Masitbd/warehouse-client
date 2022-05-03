
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
   /*  apiKey: "AIzaSyB0B5jo-AMdK34ND-aecmvnOobNAbIcH5E",
    authDomain: "warehouse-management-176aa.firebaseapp.com",
    projectId: "warehouse-management-176aa",
    storageBucket: "warehouse-management-176aa.appspot.com",
    messagingSenderId: "830324430877",
    appId: "1:830324430877:web:65189c85481a45b4be8ef4" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
