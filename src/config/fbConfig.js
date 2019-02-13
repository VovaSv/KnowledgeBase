import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCjQCssk3qGnZmWqCyVxpCulqyw-pvb5CI",
  authDomain: "knowledge-base-proj.firebaseapp.com",
  databaseURL: "https://knowledge-base-proj.firebaseio.com",
  projectId: "knowledge-base-proj",
  storageBucket: "knowledge-base-proj.appspot.com",
  messagingSenderId: "630363734931"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
