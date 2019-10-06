import React, { memo, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { getMessage } from "../api/Messages";

export const MessageList = memo(() => {
	const [messages, setMessages] = useState<string[]>([]);

	useEffect(() => {
		getMessage((err, message) => {
			if (err) {
				return console.error(err);
			}

			console.log(message, "123");
			

			setMessages([message, ...messages]);
		});
	}, [messages]);

	return (
		<Container>
			{messages.map((message: any, index) => {
				return (
					<div key={index} className="message-item">
						<p>{message.text}</p>
					</div>
				);
			})}
		</Container>
	);
});

const Container = styled.div`
	background: #e5ddd5;
	height: 100%;
	overflow-y: scroll;
	position: relative;
	order: 2;
	display: flex;
	flex-direction: column;
	height: 100%;

	.message-item {
		margin-bottom: 2px;
		padding-left: 9%;
		padding-right: 9%;

		p {
			padding: 6px 7px 8px 9px;
			max-width: 65%;
			background: #fff;
			border-radius: 7px;
			float: left;
		}
	}
`;
