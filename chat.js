const firebaseConfig = {
      apiKey: "AIzaSyAGLlKL2Fy8cnjAow_Cjy1RRDX3A6Mrr1Q",
      authDomain: "kwitter2-23eeb.firebaseapp.com",
      databaseURL: "https://kwitter2-23eeb-default-rtdb.firebaseio.com",
      projectId: "kwitter2-23eeb",
      storageBucket: "kwitter2-23eeb.firebasestorage.app",
      messagingSenderId: "730032067259",
      appId: "1:730032067259:web:91b5ca41fae3a5b3f70f9e"
    };
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("Message").value;
          firebase.database().ref("room_name").push({
            Message:msg,


          });
          document.getElementById("Message").innerHTML=" ";

          
    }
function getData() { firebase.database().ref("/room_name").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);

    message=message_data['Message'];

    msg="<h4 id='messages'>"+message+"</h4>"
    like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+likes+"onclick='update_likes(this.id)'>";
    span_tag="<span class='glyphicon glyphicon-thumbs-up'>likes"+likes+"</span></button><hr>";

    row=+msg;
    console.log(likes);


    document.getElementById("output").innerHTML +=row;



//End code
      } });  }); }
getData();




function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location.replace("index.html");
}