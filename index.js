const gameTitleInput = document.getElementById("gameTitle");
const strategyButton = document.getElementById("strategyButton");
const openAiUrl = "https://api.openai.com/v1/completions";

function getGameStrategy() {
    const gameTitle = gameTitleInput.value;
    fetch("/api/getgamestrat", {
        method: "POST",
        headers: {
            'Content-Type': 'application.json',
        },
        body: JSON.stringify({
            gameTitle: gameTitle,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.choices[0].text.trim());
        let formattedText = data.choices[0].text.trim().replace(/\n/g, '<br>');
        document.getElementById('gameStrategy').innerHTML = formattedText;
    })
}

    strategyButton.addEventListener('click', getGameStrategy);
    gameTitleInput.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) { 
            getGameStrategy(); 
        }
    });