import  firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCgmJ9sb-pG54doCwT-bd4hf7E7NOq6ZMM",
    authDomain: "reels-clone-4a9af.firebaseapp.com",
    databaseURL: "https://reels-clone-4a9af.firebaseio.com",
    projectId: "reels-clone-4a9af",
    storageBucket: "reels-clone-4a9af.appspot.com",
    messagingSenderId: "521432787075",
    appId: "1:521432787075:web:6483ac18c89ac63fed53b6",
    measurementId: "G-00M7SX3NCE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();


  export default db;