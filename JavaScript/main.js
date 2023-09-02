const firebaseConfig = {
    apiKey: "AIzaSyDWjn1RxqHST9Jy96eqwacIdpgNk2AFyVw",
    authDomain: "contactform-9b841.firebaseapp.com",
    databaseURL: "https://contactform-9b841-default-rtdb.firebaseio.com",
    projectId: "contactform-9b841",
    storageBucket: "contactform-9b841.appspot.com",
    messagingSenderId: "523617430522",
    appId: "1:523617430522:web:1da892dfbe741010415243"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig)

  //reference your datebase
var ContactFormDB = firebase.database().ref('ContactForm');

document.getElementById('contactForm').addEventListener("submit", submitForm);


function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var msgContent = getElementVal('msgContent');

    saveMessages(name, emailid, msgContent);

    //      enable alert

    document.querySelector('.alert').style.display = "block";

    //      remove alert
    setTimeout(() => {
    document.querySelector('.alert').style.display = "none";
}, 3000);

// reset the form
document.getElementById('contactForm').reset()

console.log(name, emailid, msgContent);
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = ContactFormDB.push();
    
    newContactForm.set({
        name: name,
        emailid : emailid,
        msgContent : msgContent,
    })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}