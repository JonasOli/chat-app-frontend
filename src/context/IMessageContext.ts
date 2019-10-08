import { MessageState } from "./MessageState";

export interface IMessageContext {
	state: MessageState;
	setMessages: (message: string) => any;
}
