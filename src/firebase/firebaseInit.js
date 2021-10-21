import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyDs9sKJ0BOZY97KCuHrVhcfMq-ZHfDCCyo",
  authDomain: "invoice-app-96cb5.firebaseapp.com",
  projectId: "invoice-app-96cb5",
  storageBucket: "invoice-app-96cb5.appspot.com",
  messagingSenderId: "7199184107",
  appId: "1:7199184107:web:0177835a10a03db7d11aae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
