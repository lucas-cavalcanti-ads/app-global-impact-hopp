import firebase from 'firebase'
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCgB2hvK2X_sgEmDOhcGKDNxbIlLP5ox9Q",
    authDomain: "global-impact-hopp.firebaseapp.com",
    databaseURL: "https://global-impact-hopp-default-rtdb.firebaseio.com/",
    projectId: "global-impact-hopp",
    storageBucket: "global-impact-hopp.appspot.com",
    messagingSenderId: "945888731235",
    appId: "1:945888731235:web:627e269cdfa3a39e9cd856"
};

firebase.initializeApp(firebaseConfig);

export { firebase };