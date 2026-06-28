// 打字机效果
var text = "欢迎回家，妈妈～ 🐾";
var typingEl = document.getElementById('typing');
var i = 0;
function type() {
  if (i < text.length) {
    typingEl.textContent += text.charAt(i);
    i++;
    setTimeout(type, 150);
  }
}
type();

// 浮动爱心
var heartsContainer = document.getElementById('hearts');
var emojis = ['💕', '💖', '💞', '🐶', '🐾'];
function createHeart() {
  var heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  heart.style.lef';zeath.random() * 16 + 14) + 'px';
  heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
  heartsContainer.appendChild(heart);
  setTimeout(function() { heart.remove(); }, 8000);
}
setInterval(createHeart, 600);
