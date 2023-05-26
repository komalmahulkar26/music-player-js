console.log('working');
let audioE1 = document.querySelector('#audio');

console.log(audioE1);

let playbtn = document.querySelector('#playbtn');
let isplaying = false;
playbtn.addEventListener('click', event => {
  if (isplaying) {
    audioE1.pause();
    isplaying = false;
    event.target.class;
  } else {
    audioE1.play();
    isplaying = true;
  }
});
