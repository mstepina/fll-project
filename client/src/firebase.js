import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBMXRNqyOpJMZkXyxJRx2m2FuOg5gMWm74",
    authDomain: "fll-project.firebaseapp.com",
    databaseURL: "https://fll-project.firebaseio.com",
    projectId: "fll-project",
    storageBucket: "fll-project.appspot.com",
    messagingSenderId: "921010624293",
    appId: "1:921010624293:web:32455da33e835b1f952ccc",
    measurementId: "G-SSXGSDJ4FK"
};
firebase.initializeApp(config);
export default firebase
