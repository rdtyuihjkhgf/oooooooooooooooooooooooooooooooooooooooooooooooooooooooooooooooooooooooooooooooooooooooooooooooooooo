
const firebaseConfig = {
      apiKey: "AIzaSyA0Qa9q2d49YM7vj5kqNyKM4VTL3WmcHOA",
      authDomain: "o-c85cb.firebaseapp.com",
      databaseURL: "https://o-c85cb-default-rtdb.firebaseio.com",
      projectId: "o-c85cb",
      storageBucket: "o-c85cb.appspot.com",
      messagingSenderId: "796428093263",
      appId: "1:796428093263:web:90605adf80d637c503673a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //ADD YOUR FIREBASE LINKS
    function addUser(){
        user_name=document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose : "adding user"
        })
    }
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room Name - " + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"<div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
    localStorage.setItem("room_name", room_name);
    window.location="O_page.html"
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "O_page.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }