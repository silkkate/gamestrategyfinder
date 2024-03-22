
export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const gameTitle = req.body.gameTitle;
        const aiPrompt = `Give me the best strategy to beat ${gameTitle}.`;
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${process.env.GAME_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo-instruct",
                prompt: aiPrompt,
                max_tokens: 1000,
            }),
        });

        const data = await response.json();
        res.status(200).json({ strategy: data.choices[0].text.trim() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
