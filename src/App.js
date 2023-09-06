// import './firebase-messaging';
import React, { useEffect, useState } from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Enter your config object from firebase console
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
