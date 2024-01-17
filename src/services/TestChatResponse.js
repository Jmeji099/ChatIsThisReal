import OpenAI from "openai";
import 'dotenv/config'

// PROMPTS
const assigmentPrompt = "You are a Human Interaction clone"
const userPrompt = "Create a list of 16 chat interactions "
					+ "these chat interactions should appear as if they are messages coming in from people watching a twitch stream online"
					+ " the topic of this twitch stream is a tech related stream."
					+ "do not include any explanations, only provide a JSON response in the following format with no deviations:" 
					+ "[{ username: string, chatMessage: string }]"


// REMEMBER TO BLUR THIS CODE IN VIDEO CAUSE I COULD NOT GET ENV WOKRING
const API_KEY = process.env.API_KEY  

// Create instance of OpenAI with api key
const openai = new OpenAI({
	apiKey:API_KEY,
	dangerouslyAllowBrowser: true
});


// Parse the GPT repspone and set it up as a JSON 
const parseChatResponse = (gptResponse) => {
	let jsonParsed = []

	try {
	 	jsonParsed = JSON.parse(gptResponse);
		console.log(jsonParsed)
	} catch (err) {
		console.log("GPT DID NOT RESPONSE CORRECTLY");
	}

	return jsonParsed;
		
}


// The AI Function. 
	// THIS PART PROBABLY SUCKS AND CAN BE BETTER.
export const AiChatResponse = async () => {
	if (!API_KEY) {
		return [{}];
	}
	
	let chatResponse = []

	try {
		const completion = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages: [
				{ role: "system", content: assigmentPrompt},
				{ role: "user" , content: userPrompt}
			]
		})

		chatResponse = parseChatResponse(completion.choices[0].message.content)
	
	} catch (err) {
		console.log(err);
		console.log("Unable to get response from GPT");
	}


	return chatResponse 
}
