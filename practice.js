const firebaseConfig = {
  apiKey: "AIzaSyBssFPkV7U4yjJsBl-oWJJmImWuO-UFhDc",
  authDomain: "test-94-39766.firebaseapp.com",
  databaseURL: "https://test-94-39766-default-rtdb.firebaseio.com",
  projectId: "test-94-39766",
  storageBucket: "test-94-39766.appspot.com",
  messagingSenderId: "780976113069",
  appId: "1:780976113069:web:d7d189269d2bf022f70d24",
  measurementId: "G-ZH6Y31H8WJ"
};
firebase.initializeApp(firebaseConfig);
function addUser()
{
  user_name=document.getElementById("username").value;
  firebase.database().ref("/").child(user_name).update({

    purpose:"adding_user"
  })
}