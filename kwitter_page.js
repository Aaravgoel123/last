
var firebaseConfig = {
    apiKey: "AIzaSyBUTp9QWivZi3wQ_Vk727-eibZQsdjtckc",
    authDomain: "kwitter-c84b1.firebaseapp.com",
    databaseURL: "https://kwitter-c84b1-default-rtdb.firebaseio.com",
    projectId: "kwitter-c84b1",
    storageBucket: "kwitter-c84b1.appspot.com",
    messagingSenderId: "116959351131",
    appId: "1:116959351131:web:cb78453976cbad89518a7e",
    measurementId: "G-F9LG7JHWRS"
  };
  
  // Initialize Firebase
  
    firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
   msg=document.getElementById("msg").value;
   firebase.database().ref(room_name).push
   ({ name:user_name,
     message:msg,
      like:0 });

      document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
