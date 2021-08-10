import "firebase/analytics";
var firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyBshhh26c5i8SyTRfAzltdCyIun4zcKbwc",
  authDomain: "dom-portfolio.firebaseapp.com",
  projectId: "dom-portfolio",
  storageBucket: "dom-portfolio.appspot.com",
  messagingSenderId: "433090920461",
  appId: "1:433090920461:web:a136acfd14fe078390d544",
  measurementId: "G-11HFL44RZC"
};

export var app = firebase.default.initializeApp(firebaseConfig);
export const analytics = firebase.default.analytics();
