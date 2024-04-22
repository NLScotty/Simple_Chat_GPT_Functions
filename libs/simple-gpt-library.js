const OpenAILibrary = require('openai')
// Creates an Open AI Object with API key in .env file
const openai = new OpenAILibrary.OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// A function that creates an text response with the given prompt 
async function chatPrompt(prompt){
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
}
// A function that creates an image response with the given prompt. Returns url or b64_json object.
async function imagePrompt(prompt, type){
    const response = await openai.images.generate({
        model: "dall-e-2",
        prompt: prompt,
        n: 1,
        size: "512x512",
    });
    if(type === "url"){
        return response.data[0].url;
    }else{
        return response.data[0].b64_json;
    }
}

module.exports = {
    chatPrompt,
    imagePrompt,
}