// A simple file to test the use of the simple library

require('dotenv').config()
const OpenAILibrary = require('./libs/simple-gpt-library')

async function main(){
    /* Text Generation
        let result = await OpenAILibrary.chatPrompt("What is the capital of Newfoundland and Labrador?")
        console.log(result)
    */
    /* Image Generation
        let result = await OpenAILibrary.imagePrompt("A portrait image of a wizard orc with a monocle","url")
        console.log(result);
    */
}

main();