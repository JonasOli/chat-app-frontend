import React, { useEffect } from "react";
import styled from "styled-components";
import { getMessage } from "../api/Messages";
import { useMessageContext } from "../hooks/useMessageContext";
import moment from "moment";

export const MessageList = () => {
	const { state, setMessages } = useMessageContext();

	useEffect(() => {
		getMessage((err, message) => {
			if (err) {
				return console.error(err);
			}

			setMessages(message);
		});
	}, []);

	return (
		<Container>
			{state.messages.map((message: any, index) => {
				return (
					<div key={index} className="message-item">
						<p>
							<span>{message.text}</span>
							<span className="createdAt">{moment(message.createdAt).format("hh:mm")}</span>
						</p>
					</div>
				);
			})}
		</Container>
	);
};

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

			span:first-child {
				margin-right: 10px;
				position: relative;
				white-space: pre-wrap;
				word-wrap: break-word;
			}

			.createdAt {
				font-size: 10px;
			}
		}
	}
`;
