const luckyBisc = document.querySelector('.lucky');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnOpenAgain = document.querySelector('.open-again');
let phrase = document.querySelector('.p-phrase');
const randomNumber = Math.round(Math.random() * 10);

luckyBisc.addEventListener('click', () => {
  screen1.classList.add('hide');
  screen2.classList.remove('hide');
  generatePhrase();
});

btnOpenAgain.addEventListener('click', () => {
  location.reload();
});

function generatePhrase() {
  switch (randomNumber) {
    case 1:
      phrase.textContent =
        'O sucesso chegará quando você persistir além dos obstáculos.';
      break;
    case 2:
      phrase.textContent = 'Acredite em si mesmo e conquiste o impossível.';
      break;
    case 3:
      phrase.textContent = 'Grandes conquistas exigem grandes sonhos.';
      break;
    case 4:
      phrase.textContent = 'A sorte favorece os corajosos.';
      break;
    case 5:
      phrase.textContent =
        'A vida é uma jornada, aproveite cada passo do caminho.';
      break;
    case 6:
      phrase.textContent =
        'A felicidade está nas pequenas coisas, valorize cada momento.';
      break;
    case 7:
      phrase.textContent = 'Seja a mudança que você deseja ver no mundo.';
      break;
    case 8:
      phrase.textContent = 'A gratidão transforma o que temos em suficiente.';
      break;
    case 9:
      phrase.textContent =
        'O fracasso não é o fim, mas uma oportunidade para recomeçar.';
      break;
    case 10:
      phrase.textContent =
        'Acredite no poder dos seus sonhos, pois eles têm o poder de se tornarem realidade.';
      break;
  }
}
