function CarSoundImpl() {
    var audio = document.getElementById("audioPlayer");
    var canvas = document.getElementById("canvas");

    var visualizer = new MusicVisualizer.Visualizer(canvas, audio);
    var zenRenderer = new ZenRenderer(40);
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
    const clickElement = playSoundBtn.querySelector('.spec-text');
    const controlBtn = document.querySelector('.car__wheel');

    //handle for mobile
    const mobilePlayBtn = document.querySelector('.carSound__playBtn');
    const path1 = mobilePlayBtn.querySelector('.mobilePathBtn1');
    const path2 = mobilePlayBtn.querySelector('.mobilePathBtn2');

    let state = 0;

    function implementAudioState() {
        if (state == 1) {
            audio.play();
            clickElement.innerHTML = `Pause the <br> engine sound`;
            controlBtn.style.animationPlayState = 'running';
            path1.style.fill = 'black';
            path2.style.fill = 'white';
            path2.style.stroke = 'white';
        }
        else {
            audio.pause();
            clickElement.innerHTML = `Click to <br>enjoy the engine`;
            controlBtn.style.animationPlayState = 'paused';
            path1.style.fill = 'white';
            path2.style.fill = 'black';
            path2.style.stroke = 'black';
        }
    }

    function toggleState() {
        state = 1 - state;
    }

    function playBtnImpl() {
        toggleState();
        implementAudioState();
    }

    controlBtn.onclick = playBtnImpl;

    playSoundBtn.onclick = playBtnImpl;

    mobilePlayBtn.onclick = playBtnImpl;

    audio.addEventListener('ended', function () {
        state = 0;
        implementAudioState();
    });
}

CarSoundImpl();