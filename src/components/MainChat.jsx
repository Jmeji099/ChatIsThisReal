import React, { useState } from "react";
import { AiChatResponse } from "../services/TestChatResponse"
import  useInterval  from "../hooks/useInterval"
import Messages from "./Message";

function MainChat () {

	const DELAY = 10000;								// Refill messages every 20 seconds
	let RANDOMDELAY = Math.random() * 5000;				// Display a new messages at a random interval
	const [chatBank, setChatBank] = useState([])		// Bank of chat display
	const [chatDisplay, setChatDisplay] = useState([])	// The Display of items that get displayed to the user	
	

	// This use Interval will consume the chat bank
	useInterval(() => {
		if (chatBank.length > 0) {
			setChatDisplay((c) => c.concat(chatBank[0]))
			console.log(chatBank)
			setChatBank((c) => {
				c.shift()
				return c;
			})
		}
		RANDOMDELAY = Math.random() * 10000;
	},RANDOMDELAY)
	

	// This useInterval will refill the chat bank. 
 	useInterval(async () => {
		const incomingMessagesQueue = await AiChatResponse();				
		setChatBank((c) => [...c, ...incomingMessagesQueue]);
	},DELAY)
	
	return (
		<div className='text-white mt-5 mb-5 p-2'>
		{chatDisplay.map((chatMessage, key) => {
			return (
				<Messages key={key} chatMessage={chatMessage} />
			)
		})}
		</div> 
	)
}

export default MainChat;
