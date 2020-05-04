//FIREBASE START
var firebaseConfig = {
  apiKey: "AIzaSyDGVu23LeGGK_fAGNV7JYobLcvkkIuPnok",
  authDomain: "bioit-92cd6.firebaseapp.com",
  databaseURL: "https://bioit-92cd6.firebaseio.com",
  projectId: "bioit-92cd6",
  storageBucket: "bioit-92cd6.appspot.com",
  messagingSenderId: "696892831024",
  appId: "1:696892831024:web:80c3e2475307418f6cc4f5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const dbase = firebase.firestore();
//FIREBASE END

//***********Sign up***********

function signUp() {
  const signupForm = document.querySelector("#regtab");
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;
    const confPassword = signupForm["confirm-signup-password"].value;
    if (confPassword == password) {
      //signup the user
      auth.createUserWithEmailAndPassword(email, password).then((cred) => {
        signupForm.reset();
      });
    }
    else {
      alert("הסיסמאות לא תואמות, נסה שוב");
    }
  });
}
//logout users
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//   e.preventDefault();
//   auth.signOut().then(() => {
//     console.log('User signed out');
//   });
// });