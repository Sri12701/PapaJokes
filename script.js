const jokeElement = document.getElementById('comedy');
const jokeBtn = document.getElementById('comedybutt');

jokeBtn.addEventListener('click', () => generateJoke());

generateJoke();

async function generateJoke() {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    jokeElement.innerHTML = data.joke;
  } catch (err) {
    jokeElement.innerHTML = `<p><strong>${err.name}</strong></p><p>${err.message}</p>`;
  }
}