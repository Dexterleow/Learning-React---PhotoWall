import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAdoCaeENidZv3EoKdBIuDLx1Ox2coLFiA",
    authDomain: "photowall-87a60.firebaseapp.com",
    databaseURL: "https://photowall-87a60.firebaseio.com",
    projectId: "photowall-87a60",
    storageBucket: "photowall-87a60.appspot.com",
    messagingSenderId: "142537774344"
  };

  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}