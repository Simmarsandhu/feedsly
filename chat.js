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

    user_name="user";
    room_name="room_name";
    function send(){
          msg=document.getElementById("message").value;
          firebase.database().ref(room_name).push({
           Name:user_name,
            Message:msg,
            likes:0


          });
          document.getElementById("message").innerHTML=" ";

          
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);

    User_name=message_data['Name'];
    message=message_data['Message'];
    likes=message_data['likes'];

    name="<h4>"+User_name+"<img src='tick.png' id='tick_img'></h4>";
    msg="<h4 id='messages'>"+message+"</h4>"
    like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+likes+"onclick='update_likes(this.id)'>";
    span_tag="<span class='glyphicon glyphicon-thumbs-up'>likes"+likes+"</span></button><hr>";

    row=name+msg+like_button+span_tag;
    console.log("1");


    document.getElementById("output").innerHTML +=row;



//End code
      } });  }); }
getData();

function update_likes(like_id){
      console.log("updated likes="+like_id);
      new_id=like_id;
      thumb=document.getElementById(new_id).value;
      console.log("2");
      updated_likes= Number(thumb)+1;
      console.log(updated_likes);

 firebase.database().ref(room_name).child(like_id).update({likes:updated_likes});

}


function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location.replace("index.html");
}