import React, { useEffect, useState } from "react";
import {BugAntIcon, CheckBadgeIcon} from '@heroicons/react/24/solid'

//Variation of the Regulat message with a different Border and background highlighting
const BorderMessage = (props) => {

	return (
		<div key={props.key} className="text-sm text-white border-red-500 bg-red-300/35 flex flex-row rounded-md">
			{props.bugAnt ? <BugAntIcon className="h-3 w-3 text-red-400" /> : null }
			{props.checkBadge ? <CheckBadgeIcon className="h-3 w-3 text-blue-400" /> : null }
			<span className="font-bold">{props.username}: </span>
			{props.chatMessage}
		</div>
	)
}
const FirstTimeUserMessage = (props) => {

	return (
		<div key={props.key} className="text-sm text-white flex flex-row">
			{props.bugAnt ? <BugAntIcon className="h-3 w-3 text-red-400" /> : null }
			{props.checkBadge ? <CheckBadgeIcon className="h-3 w-3 text-blue-400" /> : null }
			<span className="font-extrabold text-red-300"> FIRST TIME USER </span>
			<span className="font-bold"> {props.username}: </span>
			{props.chatMessage}
		</div>
	)
}

const Messages = (props) => {

	const [borderColor, setBorderColor] = useState(false);
	const [bugAnt, setBugAnt] = useState(false);
	const [checkBadge, setCheckBadge] = useState(false);
	const [firstTimeUser, setDisplayFirstTimeUser] = useState(false);

	const Display = () => {
		setBorderColor(Math.random() > .8)
		setBugAnt(Math.random() > .6)
		setCheckBadge(Math.random() > .4)
		setDisplayFirstTimeUser(Math.random() > .8)
	}

	useEffect(() => {
		Display();
	},[])

	return (
		<div className="mt-2">
		{ borderColor ? <BorderMessage 
							key={props.key} 
							chatMessage={props.chatMessage.chatMessage} 
							username={props.chatMessage.username} 
							bugAnt={bugAnt} 
							checkBadge={checkBadge} /> 
			: null 
		}
		{ firstTimeUser ? <FirstTimeUserMessage 
							key={props.key} 
							chatMessage={props.chatMessage.chatMessage} 
							username={props.chatMessage.username} 
							bugAnt={bugAnt} 
							checkBadge={checkBadge} /> 
			: null 
		}
		{ !borderColor && !firstTimeUser ? 
				<div key={props.key} className="text-sm text-white flex flex-row">
				{bugAnt ? <BugAntIcon className="h-3 w-3 text-red-400" /> : null }
				{checkBadge ? <CheckBadgeIcon className="h-3 w-3 text-blue-400" /> : null }
				<span className="font-bold">{props.chatMessage.username}: </span>
				{props.chatMessage.chatMessage}
				</div> : null }
		</div>
	)
}

export default Messages;
