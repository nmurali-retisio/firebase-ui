// import './firebase-messaging';
import React, { useEffect, useState } from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDxR4EWvwoDJ-UwzVR5Z-DlbtT43paAgI",
  authDomain: "fir-test-a3fe8.firebaseapp.com",
  databaseURL: "https://fir-test-a3fe8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-test-a3fe8",
  storageBucket: "fir-test-a3fe8.appspot.com",
  messagingSenderId: "319964364315",
  appId: "1:319964364315:web:074502f8bf111eda2302be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function App() {

  // const testRef = ref(database, 'notifications');

  // onValue(testRef, (snapshot) => {
  //   const data = snapshot.val();
  //   console.log("data ", data)
  // });

  const [notification, setNotification] = useState(null);


  useEffect(() => {
    const userId = '1';
    const notificationsRef = ref(database, `notifications/${userId}`);

    onValue(notificationsRef, (snapshot) => {
      const data = snapshot.val();
      // setNotification(data);
      console.log("Notification data: ", data)
    });
  }, [])


  return (
    <div className="App">
      <h1> Firebase database test </h1>
      <div className="notification">
        {notification && <div className="notification-message">{notification}</div>}
      </div>
    </div>
  );
}

export default App;