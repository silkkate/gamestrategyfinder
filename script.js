const gameTitleInput = document.getElementById("gameTitle");
const strategyButton = document.getElementById("strategyButton");
const apiKey = "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";
const openAiUrl = "https://api.openai.com/v1/engines/davinci/completions";

strategyButton.addEventListener('click', (event) => {
    console.log("Button was clicked");
    event.preventDefault(); 
const gameTitle = gameTitleInput.value;
const aiPrompt = `Give me the best strategy to beat ${gameTitle}.`;
getGameStrat(aiPrompt);
});

function getGameStrat(x){
    fetch(openAiUrl, {
        method: "POST",
        headers: {
            "Authorization":  `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt: x,
            max_tokens: 1000,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Full response data:", data);
        console.log(data.choices[0].text.trim());
    })
}
