const trailer = document.getElementById("tillSlutetTrailer");
const pause = document.getElementById("myBtn");
const volumeSlider = document.getElementById("volumeSlider");


pause.addEventListener("click", function(){
    if (trailer.paused) {
        trailer.play();
        pause.textContent = "Pause";
    } else {
        trailer.pause();
        pause.textContent = "Play";
    }
});

volumeSlider.addEventListener("input", function() {
    trailer.volume = volumeSlider.value / 100;

    // Aktivera ljudet när volymen höjs
    trailer.muted = volumeSlider.value == 0;
});

