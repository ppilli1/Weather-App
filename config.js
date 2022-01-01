import firebase from "firebase";
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDvcpRvn-0kSLhJeU6x2ma5fCRcw_mV6lI",
    authDomain: "quiz-buzzer-69572.firebaseapp.com",
    databaseURL: "https://quiz-buzzer-69572-default-rtdb.firebaseio.com",
    projectId: "quiz-buzzer-69572",
    storageBucket: "quiz-buzzer-69572.appspot.com",
    messagingSenderId: "752327215046",
    appId: "1:752327215046:web:2c3da4d49a95be9eeb14c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();
  