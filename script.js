const gif = document.getElementById('gif');
const preloader = document.getElementById('preloader');
const audio = document.getElementById('radio');

const gifURL = 'img/radio.gif';
const pausedFrame = 'img/frame-pausa.png';
const radioURL = 'https://stream.zeno.fm/0c5xvhqhedsvv';

function playAll() {
  // Recarga el stream para que sea en vivo
  audio.src = radioURL;
  audio.load();
  audio.play();

  // Preload del gif invisible y reemplazo suave
  preloader.src = gifURL;
  preloader.onload = () => {
    gif.src = gifURL;
  };
}

function stopAll() {
  audio.pause();
  audio.src = '';
  gif.src = pausedFrame;
}
