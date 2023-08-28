// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWZltzGfTqy7f7cnL5XiwChVSLyrbaf6M",
  authDomain: "letschat-b3fd1.firebaseapp.com",
  databaseURL: "https://letschat-b3fd1-default-rtdb.firebaseio.com",
  projectId: "letschat-b3fd1",
  storageBucket: "letschat-b3fd1.appspot.com",
  messagingSenderId: "586932782347",
  appId: "1:586932782347:web:eacab70326731beab88e0e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "chatter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chatter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}