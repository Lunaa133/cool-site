const playlist = {
        'avril': ['music/skater boi.mp3'],
        'offspring': ['music/offspring/staring at the sun.mp3', 'music/offspring/the kids arent alr.mp3', 'music/offspring/want u bad.mp3'],
        'sum41': ['music/sum41/all messed up.mp3', 'music/sum41/my direction.mp3', 'music/sum41/open ur eyes.mp3', 'music/sum41/some say.mp3', 'music/sum41/we r all to blame.mp3'],
        'mcr': ['music/imnotok.mp3'] };

const c = {'avril': 0, 'offspring': 0, 'sum41': 0, 'mcr': 0};

function play(a){
    const p = document.getElementById('hey');
    const tracks = playlist[a];
    let index = c[a];
    p.src = tracks[index];
    p.play()

    c[a] = (index + 1) % tracks.length;
}



const canvas = document.getElementById('c');
const aaa = canvas.getContext('2d');

let isDrawing = false;

aaa.strokeStyle = 'purple';
aaa.lineWidth = 3;
aaa.lineCap = 'round';

canvas.addEventListener('mousedown', (e) => {
isDrawing = true;
aaa.beginPath();
aaa.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
    if(!isDrawing) return;
    aaa.lineTo(e.offsetX, e.offsetY);
    aaa.stroke();
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseleave', () => isDrawing = false);

function cls(){
    aaa.clearRect(0, 0, canvas.width, canvas.height);
}
