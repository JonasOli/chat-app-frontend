import React from "react";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { MessageForm } from "../components/MessageForm";
import { MessageList } from "../components/MessageList";

export const Chat = () => {
	return (
		<Container>
			<h1>Chat App</h1>
			<MessageList />
			<MessageForm />
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	display: flex;
	top: 0;
	flex-direction: column;
	bottom: 0;
	height: 100%;
	margin: auto;

	h1 {
		height: 4rem;
		align-items: center;
		display: flex;
		justify-content: center;
		border-bottom: 1px solid;
		background: #efefef;
	}
`;
