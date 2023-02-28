const dinosaur = document.getElementById('dinosaur');

function jump() {
  dinosaur.classList.add('jump');

  setTimeout(function () {
    dinosaur.classList.remove('jump');
  }, 900);
}
document.addEventListener('keydown', function (event) {
  jump();
});
