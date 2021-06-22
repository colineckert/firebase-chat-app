import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDgpGeCZuS8z4JoAxaKFEP-GAt67K2eYK4",
  authDomain: "superchat-13784.firebaseapp.com",
  projectId: "superchat-13784",
  storageBucket: "superchat-13784.appspot.com",
  messagingSenderId: "448953794783",
  appId: "1:448953794783:web:913687c384d8b1f658a96a"
});

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState();

  return (
    <div className="App">
      <header className="App-header">

      </header>
      
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  
}

export default App;
