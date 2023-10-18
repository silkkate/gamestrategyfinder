// pages/api/fetchData.js

export default async (req, res) => {
    const apiKey = process.env.MY_SECRET_API_KEY;
    const openAiUrl = "https://api.openai.com/v1/engines/text-davinci-003/completions";
    const gameTitle = req.body.gameTitle;
    const aiPrompt = `Give me the best strategy to beat ${gameTitle}.`;

    try {
        const response = await fetch(openAiUrl, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: aiPrompt,
                max_tokens: 1000,
            }),
        });

        const data = await response.json();
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch from OpenAI' });
    }
};
