var SpeechRecognition = window.webkitSpeechRecongnition;

var recognition =  new SpeechRecognition();

function begin(){
    document.getElementById("textbox").innerHTML="";
    recognition.begin();
}
recognition.onresult= function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    doncument.getElementById("textbox").innerHTML=content;
}