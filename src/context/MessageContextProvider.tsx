import React, { createContext, useState } from "react";
import { MessageState } from "./MessageState";

//@ts-ignore
export const MessageContext = createContext();

export const MessageContextProvider = ({ children }: any) => {
	const [state, setState] = useState(new MessageState());

	return (
		<MessageContext.Provider
			value={{
				state,
				setMessages: (message: string) => setState(state.setMessages(message))
			}}
		>
			{children}
		</MessageContext.Provider>
	);
};
