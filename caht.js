// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH2j-mWtVLxdS3adu9HPRQGPzpW2a_xcI",
  authDomain: "feedslyhun123.firebaseapp.com",
  databaseURL: "https://feedslyhun123-default-rtdb.firebaseio.com",
  projectId: "feedslyhun123",
  storageBucket: "feedslyhun123.firebasestorage.app",
  messagingSenderId: "582484536849",
  appId: "1:582484536849:web:d806057ef65adc7bf6cbb0",
  measurementId: "G-KT9TDGR65G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



name_welcome=localStorage.getItem("user_name");
document.getElementById("names").innerHTML="WELCOME!"+"  "+ name_welcome +" "+ ":)";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name=" +Room_names);
       row="<div class='room_name1' id="+Room_names+"onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;

       
      });});}
getData();
function redirectToRoom(Rooms){
      console.log("selected_room="+ Rooms);
      localStorage.setItem("room_name", Rooms);

      window.location="chat.html";
}


function logout(){
      
      window.location="index.html";
}

function addRoom(){
     room=document.getElementById("room_name").value;
     localStorage.setItem("room_name" ,room);
     firebase.database().ref("/").child(room).update({purpose:"add room name"});

     window.location ="chat.html";
}