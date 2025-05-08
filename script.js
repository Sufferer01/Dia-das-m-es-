
const photos = [
  "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg",
  "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg"
];
const texts = [
  "O seu sorriso sempre foi o meu porto seguro. Nele, encontrei amor puro e verdadeiro.",
  "Cada beijo seu foi um abraço na alma. Mãe, seu carinho é eterno.",
  "Na sua presença, eu era livre para ser criança. Obrigado por nunca soltar minha mão.",
  "Entre risadas e travessuras, você foi meu mundo inteiro.",
  "No seu colo, o tempo parava. Amor de mãe é onde mora a paz.",
  "Mesmo nos dias mais simples, você me fazia sentir especial.",
  "Com você, aprendi o que é ser forte. E o que é amar sem medidas.",
  "Nossos momentos viraram memórias que moram no meu coração para sempre.",
  "Seu sorriso foi o sol que iluminou minha infância. Te amo, mãe.",
  "Essa história é nossa. E cada imagem é um pedaço do nosso amor."
];
let current = 0;
setInterval(() => {
  current = (current + 1) % photos.length;
  document.getElementById("photo").src = photos[current];
  document.getElementById("photoText").innerText = texts[current];
}, 90000); // 1 min 30s

function toggleMusic() {
  const bgm = document.getElementById("bgm");
  if (bgm.paused) bgm.play();
  else bgm.pause();
}
