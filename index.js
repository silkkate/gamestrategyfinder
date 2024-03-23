const gameTitleInput = document.getElementById("gameTitle");
const strategyButton = document.getElementById("strategyButton");
const loadingIndicator = document.getElementById("loadingIndicator");
const openAiUrl = "https://api.openai.com/v1/completions";

function getGameStrategy() {
    strategyButton.disabled = true;
    loadingIndicator.style.display = 'block';

    const gameTitle = gameTitleInput.value;
    fetch("/api/getgamestrat", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            gameTitle: gameTitle,
        }),
    })    
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let formattedText = data.strategy.replace(/\n/g, '<br>');
        document.getElementById('gameStrategy').innerHTML = formattedText;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    })
    .finally(() => {
        strategyButton.disabled = false;
        loadingIndicator.style.display = 'none';
    });
}

    strategyButton.addEventListener('click', getGameStrategy);
    gameTitleInput.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) { 
            getGameStrategy(); 
        }
    });