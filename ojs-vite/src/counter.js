import JSConfetti from 'js-confetti';

export function setupCounter(element) {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    emojis: ['😎', '😂', '👻', '🎃'],
 });
 
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0);

  jsConfetti.addConfetti();
}