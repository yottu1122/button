const initialValue = 10;
const countText = document.getElementById('count');
const buttonImg = document.getElementById('button-img');
const tapSound = document.getElementById('tap-sound');
let count = localStorage.getItem('tapCount');
// タップした回数を取得し、表示する
if (!localStorage.getItem('tapCount')) {
    count = initialValue;
}
countText.textContent = count;
// タップした回数を保存する
buttonImg.onclick = function() {
    count--;
    localStorage.setItem('tapCount', count);

    if (count <= 0) {
        countText.textContent = 'キケン';
        this.src = 'img/button_on.png';
        localStorage.removeItem('tapCount');
        return;
    }
    // タップ音を鳴らす
    countText.textContent = count;
    tapSound.currentTime = 0;
    tapSound.play();
};