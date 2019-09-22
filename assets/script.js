var firebaseConfig = {
    apiKey: "AIzaSyByxgD4XC9O9D7m8mEuLQP8Gh5hSgFsuu0",
    authDomain: "test-59878.firebaseapp.com",
    databaseURL: "https://test-59878.firebaseio.com",
    projectId: "test-59878",
    storageBucket: "",
    messagingSenderId: "86995298006",
    appId: "1:86995298006:web:6d4b1fd9074b943bdf4b77"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var trainName = "";
var Destination = "";
var Time = 0;
var Frequency = 0;