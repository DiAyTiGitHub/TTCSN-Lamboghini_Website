function CarSoundImpl() {
    var audio = document.getElementById("audioPlayer");
    var canvas = document.getElementById("canvas");

    var visualizer = new MusicVisualizer.Visualizer(canvas, audio);
    var zenRenderer = new ZenRenderer(34);
    visualizer.renderer = zenRenderer;
    visualizer.analyzerNode.fftSize = 512;
    visualizer.audioFilters.push(new MusicVisualizer.simpleDampenFilter());

    function fullSize(canvas) {
        canvas.height = canvas.offsetHeight;
        canvas.width = canvas.offsetWidth;
    }

    function updateVis() {
        fullSize(canvas);
        visualizer.render();
        requestAnimationFrame(updateVis);
    }

    updateVis();

    const playSoundBtn = document.getElementById("playSoundBtn");
    const controlBtn = document.querySelector('.car__wheel');
    let state = 0;
    controlBtn.onclick = function () {
        state = 1 - state;
        if (state == 1) {
            audio.play();
            controlBtn.style.animationPlayState = 'running';
        }
        else {
            audio.pause();
            controlBtn.style.animationPlayState = 'paused';
        }
    }

    playSoundBtn.onclick = function () {
        state = 1 - state;
        if (state == 1) {
            audio.play();
            controlBtn.style.animationPlayState = 'running';
        }
        else {
            audio.pause();
            controlBtn.style.animationPlayState = 'paused';
        }
    }

    audio.addEventListener('ended', function () {
        controlBtn.style.animationPlayState = 'paused';
    });
}

CarSoundImpl();