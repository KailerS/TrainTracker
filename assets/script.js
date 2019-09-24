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


$("#add-train").on("click", function (event){
    event.preventDefault();

    var trainName =$("#name-input").val().trim();
    var destination =$("#destination-input").val().trim();
    var time = moment($("#start-input").val().trim(), "HH:mm").format("X");
    var frequency =$("#freq-input").val().trim();

    var newTrain = {
        name : trainName,
        destination: destination,
        start: time,
        freq: frequency,
    }

    database.ref().push(newTrain);


    $("input").val("");
});

database.ref().on("child_added", function (childSnapshot){
    
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var time = childSnapshot.val().start;
    var frequency = childSnapshot.val().freq;
    var prettyTime =moment.unix(time).format("HH:mm");
    var timeConverted = moment(prettyTime, "HH:mm").subtract(1, "years");    
    var difference = moment().diff(moment(timeConverted), "minutes");
    var remainder = difference % frequency;
    var minutesAway = frequency - remainder;
    var nextTrain = moment().add(minutesAway, "minutes");
    var prettyNextTrain = moment(nextTrain).format("HH:mm");

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(prettyNextTrain),
        $("<td>").text(minutesAway),       
    );
    $("#table > tbody").append(newRow);


});