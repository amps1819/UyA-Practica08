'use strict';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDMxJAZX0rjs-wrbkvQN6-LOA4kVfOBQqo",
    authDomain: "club-de-lectura-645b6.firebaseapp.com",
    databaseURL: "https://club-de-lectura-645b6.firebaseio.com",
    projectId: "club-de-lectura-645b6",
    storageBucket: "club-de-lectura-645b6.appspot.com",
    messagingSenderId: "2742318667"
}
firebase.initializeApp(config);
// Referencia a la base de datos
var database = firebase.database();

$('#login').submit(() => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        window.location = "./form.html";
        // Simulate a mouse click:
        //window.location.href = "./form.html";
        // Simulate an HTTP redirect:
        //window.location.replace("./form.html");
    })
    .catch((error) => {
        // Handle Errors here.
        alert('Error ['+error.code+']: '+error.message);
    });

    /*
    var user = firebase.auth().currentUser;
    if (user) {
      alert(user.email+' is logged in.');
    } else {
        alert('No user is logged in.');
    }
    */
    // Para cancelar el submit
    return false;
});


/*
{
  "rules": {
    "libros": {
    	"$libro": {
      	".read": "auth != null",
        ".write": "auth != null",
        // Comprueba que todas las entradas introducidas en /libros/ tengan los campos: autor, año y título y no estén vacíos
        ".validate": "newData.child('autor').val() !== '' && newData.child('año').val() !== '' && newData.child('título').val() !== ''"
      }
    }
  }
}
*/
