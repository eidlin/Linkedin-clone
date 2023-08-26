import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCUDb1M6gCG-VgvT3bDV1AW7n0fjVKWKW4",
    authDomain: "linkedin-clone-c3477.firebaseapp.com",
    projectId: "linkedin-clone-c3477",
    storageBucket: "linkedin-clone-c3477.appspot.com",
    messagingSenderId: "359265973946",
    appId: "1:359265973946:web:ce2dd6be2a4293f90af483"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export{db,auth};

