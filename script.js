const gameTitleInput = document.getElementById("gameTitle");
const strategyButton = document.getElementById("strategyButton");
const apiKey = `${process.env.GAME_API_KEY}`;
const openAiUrl = "https://api.openai.com/v1/engines/text-davinci-003/completions";

function getGameStrategy() {
    const gameTitle = gameTitleInput.value;
    const aiPrompt = `Give me the best strategy to beat ${gameTitle}.`;
    fetch(openAiUrl, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: aiPrompt,
            max_tokens: 1000,
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

