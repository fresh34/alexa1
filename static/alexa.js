window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const ALEXA =  new SpeechRecognition();
const przycisk = document.querySelector('input');

przycisk.addEventListener('click', ()=> ALEXA.start() )
ALEXA.addEventListener('result', function(e){
   console.log('Ich akzeptierte')
   console.dir(e);
});