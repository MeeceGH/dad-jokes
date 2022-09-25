const joke = document.getElementById('joke-container');
const button = document.querySelector('.btn');

async function generateJoke() {
    const config = { 
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    
    joke.textContent = data.joke;
}

function initScript() {
    generateJoke();

    button.addEventListener('click', generateJoke);
}

initScript();