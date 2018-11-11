const functions = require('firebase-functions');
const CryptoJS = require('crypto-js');
const IPFS = require('ipfs');
const dan = new IPFS();

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.cryptTest = functions.https.onRequest((req, res) => {
    const key = 'thisisakey';

    const text = req.query.text;
    
    var encryptedText = CryptoJS.AES.encrypt(text, key);
    console.log('encryptedtext: ' + encryptedText);
})

exports.decryptIPFS = functions.https.onRequest((req, res) => {
  const key = req.query.text;
  const block = req.query.text;

  var decryptedText = CryptoJS.AES.decrypt(encryptedText, key);
  var plaintext = decryptedText.toString(CryptoJS.enc.Utf8);

  res.send(plaintext);
  console.log('decryptedtext: ' + plaintext)
})

exports.writeToIPFS = functions.https.onRequest((req, res) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  const filePath = req.query.filePath;
  const inputText = req.query.inputText;
  const key = getRandomInt(2147483647);
  
  admin.database().ref('/keys').push({key: key});

  var encryptedText = CryptoJS.AES.encrypt(inputText, key.toString());
  console.log('encryptedtext: ' + encryptedText);
  
  // const filesAdded = dan.files.add({
  //   path: filePath,
  //   content: Buffer.from('Hello World 101')
  // })
  
  // dankMeme = req.require.image;

  // uploadTask = firebase.storage().ref('/memes').child('dankMeme').putString(dankMeme, 'base64', {contentType:'image/jpg'});
  // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  // function(snapshot) {
  //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //   console.log('Upload is ' + progress + '% done');
  //   switch (snapshot.state) {
  //     case firebase.storage.TaskState.PAUSED: // or 'paused'
  //       console.log('Upload is paused');
  //       break;
  //     case firebase.storage.TaskState.RUNNING: // or 'running'
  //       console.log('Upload is running');
  //       break;
  //   }
  // }, function(error) {
  //   console.log(error);
  // }, function() {
  // // Upload completed successfully, now we can get the download URL
  // var downloadURL = uploadTask.snapshot.downloadURL;
  // });
})