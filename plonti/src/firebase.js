import firebase from "firebase/app"
import "firebase/firestore"

  // Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBBKa4JnouO_5fpSLQp4PPwwV2AAxTD0VQ",
authDomain: "plonti-32829.firebaseapp.com",
databaseURL: "https://plonti-32829.firebaseio.com",
projectId: "plonti-32829",
storageBucket: "plonti-32829.appspot.com",
messagingSenderId: "199792256240",
appId: "1:199792256240:web:43dd72cf694e652c7d0e35",
measurementId: "G-4W5Y13VZVZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;
