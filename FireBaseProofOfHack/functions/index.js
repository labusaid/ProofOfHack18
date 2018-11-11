const functions = require('firebase-functions');
const CryptoJS = require('crypto-js');
const IPFS = require('ipfs');
const dan = new IPFS();

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

exports.cryptTest = functions.https.onRequest((req, res) => {
    const key = 'thisisakey';

    const text = req.query.text;
    
    var encryptedText = CryptoJS.AES.encrypt(text, key);
    console.log('encryptedtext: ' + encryptedText);
    
    var decryptedText = CryptoJS.AES.decrypt(encryptedText, key);
    var plaintext = decryptedText.toString(CryptoJS.enc.Utf8);
    console.log('decryptedtext: ' + plaintext);
})

exports.writeToIPFS = functions.https.onRequest((req, res) => {
  console.log('called writeToIPFS');
  
  const filesAdded = dan.files.add({
    path: 'https://www.w3.org/TR/PNG/iso_8859-1.txt',
    content: Buffer.from('Hello World 101')
  })
  console.log('Added file:', filesAdded)
})