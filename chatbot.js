const OpenAI = require('openai');
const fs = require('fs');

// Replace 'your-api-key' with your actual OpenAI API key
fs.readFile('./key.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
});
  

const apiKey = fs.readFileSync("./key",u) ;
const openai = new OpenAI(apiKey);

const prompt = 'What is the meaning of life?';

openai.complete.create({
  engine: 'davinci-codex', // You can use other engines like 'text-davinci-003'
  prompt: prompt,
  max_tokens: 150,
})
  .then(response => {
    const answer = response.data.choices[0].text.trim();
    console.log(`Answer: ${answer}`);
  })
  .catch(error => console.error('Error:', error));
