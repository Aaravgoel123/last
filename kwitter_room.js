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
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addRoom(){
     room_name=document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update(
          { purpose : "adding room" }
          );
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
  }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log(Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name); 
    localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}
