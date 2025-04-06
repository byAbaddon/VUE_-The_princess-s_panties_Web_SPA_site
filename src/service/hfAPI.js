//------------------- Google api
async function askWitch(text) {
    const apiKey = "XXXXXXXXXXXXXXXXXXXXXXXXX"; //  API key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    const requestBody = {
        contents: [{ parts: [{ text: `Return answer in less than 70 symbols: ${text}` }] }]
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        // get data
        return data.candidates?.[0]?.content?.parts?.[0]?.text.trim() || "Error response";
    } catch (error) {
        console.error("Error fetch:", error);
        return "Error fetch failed";
    }
}


export { askWitch }




//-------------------------------- hugging Face apy

// import { HfInference } from "@huggingface/inference";

// const inference = new HfInference("hf_XXXXXXXXXXXXXXXXXXXXXx");

// async function askWitch(text) {
//     let answerText = "" // save translated text
//     for await (const chunk of inference.chatCompletionStream({
//         model: "mistralai/Mistral-Nemo-Instruct-2407",
//         messages: [{ role: "user", content: "Answer the question and return a short answer only text: " + text }],
//         max_tokens: 500,
//     })) {
//         answerText += chunk.choices[0]?.delta?.content || ""
//     }

//     return answerText
// }

// export { askWitch }




