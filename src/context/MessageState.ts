export class MessageState {
	constructor(public messages: string[] = []) {}

	setMessages = (message: string) => {
		this.messages.unshift(message);

		return this.clone;
	};

	private clone = () => {
		return new MessageState(this.messages);
	};
}
