
// const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

// const apiKey = process.env.GEMINI_API_KEY || "AIzaSyBvLlmGzi61bwN3DreO7OqpsvH3_HR0kbE"; // Use environment variable or fallback to hard-coded API key

// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-pro-latest",
// });

// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
// };

// const safetySettings = [
//     {
//         category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//         category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//         category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//         category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
// ];

// async function run() {
//     try {
//         const chatSession = await model.startChat({
//             generationConfig,
//             safetySettings,
//             history: [],
//         });

//         const result = await chatSession.sendMessage({ text: "INSERT_INPUT_HERE" });
//         console.log(result.response.text); // Use `text` property directly
//     } catch (error) {
//         console.error("Error during the chat session:", error);
//     }
// }

// run();

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";


const MODEL_NAME = 'gemini-1.0-pro';
const API_KEY = "AIzaSyBvLlmGzi61bwN3DreO7OqpsvH3_HR0kbE";

async function runChat(prompt){
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({model: MODEL_NAME});

    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
        ],
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
}

export default runChat;
