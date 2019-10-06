import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { sendUserLocation } from "../api/Location";
import { sendMessage } from "../api/Messages";
import sendLocationButtonImage from "../assets/images/placeholder.svg";
import sendMessageButtonImage from "../assets/images/send-button.svg";

export const MessageForm = () => {
	const [message, setMessage] = useState("");

	function submitMessage() {
		sendMessage(message);
		setMessage("");
	}

	function sendLocation() {
		sendUserLocation((err, response) => {
			if (err) {
				return toast.error(err);
			}

			return toast.success(response);
		});
	}

	return (
		<Container>
			<input
				value={message}
				type="text"
				placeholder="Type a message"
				onChange={evt => setMessage(evt.target.value)}
				onKeyPress={({ key }) => {
					if (key === "Enter") {
						submitMessage();
					}
				}}
			/>
			<StyledButton onClick={submitMessage} className="send-message-button">
				<img src={sendMessageButtonImage} alt="Send message" />
			</StyledButton>
			<StyledButton onClick={sendLocation}>
				<img src={sendLocationButtonImage} alt="Send location" />
			</StyledButton>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	bottom: 0;
	order: 3;
	width: 100%;
	padding: 5px 10px;
	background-color: #efefef;
	min-height: 62px;
	display: flex;
	justify-content: center;
	align-items: center;

	input {
		width: 87%;
		padding: 9px 12px 11px;
		margin: 5px 10px;
		border-radius: 21px;
		border: 0;
	}
`;

const StyledButton = styled.button`
	background: none;
	border: 0;
	cursor: pointer;
	padding: 5px 10px;

	img {
		width: 24px;
		height: 24px;
	}
`;
