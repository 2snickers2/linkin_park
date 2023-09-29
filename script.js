// var btnvar1 = document.getElementById('btnh1');

// function Toggle1(){
//          if (btnvar1.style.color =="red") {
//              btnvar1.style.color = "grey"
//          }
//          else{
//              btnvar1.style.color = "red"
//          }
// }
var audioElements = document.querySelectorAll('audio');
audioElements.forEach(function(audio) {
    audio.addEventListener('play', function() {
        audioElements.forEach(function(otherAudio) {
            if (otherAudio !== audio && !otherAudio.paused) {
                otherAudio.pause();
            }
        });
    });
});