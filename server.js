const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/cities/:city_name/attractions', async (req, res) => {
  const cityName = req.params.city_name;

  try {
    const response = await fetch(
      'http://127.0.0.1:7860/api/v1/run/eaea3378-4b11-4182-ba14-cb41c9446dc4?stream=false',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'process.env.OPENAI_API_KEY',
        },
        body: JSON.stringify({
          input_value: cityName,
          output_type: 'chat',
          input_type: 'chat',
          tweaks: {
            'ChatInput-q0Jd4': {},
            'Prompt-uIDt8': {},
            'ChatOutput-qt69r': {},
            'OpenAIModel-2gEnN': {},
          },
        }),
      }
    );

    const data = await response.json();

    // Extracting the text message from the nested structure
    const messageText =
      data.outputs?.[0]?.outputs?.[0]?.outputs?.message?.message?.text;

    if (messageText) {
      const attractionsArray = messageText
        .split('\n')
        .map((item) => item.replace(/^\d+\.\s*/, '').trim())
        .filter((item) => item !== '');

      res.json({ attractions: attractionsArray });
    } else {
      res.status(500).json({ error: 'Unexpected response structure from Langflow API' });
    }
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch attractions' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
