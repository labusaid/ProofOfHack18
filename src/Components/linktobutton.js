function buttonPressed(){
    var userInput0 = document.getElementById('standard-required').value;
    var link = document.getElementById("upload-button");
    if (userInput0 == ""){
        return;
    } 
    else {
        link.href = "https://us-central1-proofofhack2018.cloudfunctions.net/writeToIPFS?inputText="+userInput0; 
    }
}