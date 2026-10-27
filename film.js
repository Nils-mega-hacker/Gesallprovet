//controls the trailer that gets shown for Till Slutet


//Variables
const trailer = document.getElementById("tillSlutetTrailer");
const pause = document.getElementById("myBtn");
const volumeSlider = document.getElementById("volumeSlider");

//clicking "pause" / "resume" pauses / resumes the video
pause.addEventListener("click", function(){
    if (trailer.paused) {
        trailer.play();
        pause.textContent = "Pause";
    } else {
        trailer.pause();
        pause.textContent = "Play";
    }
});

//A volume slider that can lower/raise the volume
volumeSlider.addEventListener("input", function() {
    trailer.volume = volumeSlider.value / 100;

    trailer.muted = volumeSlider.value == 0;
});

