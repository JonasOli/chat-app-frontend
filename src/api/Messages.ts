import { useSocket } from "../hooks/useSocket";

const socket = useSocket();

export function getMessage(callback: (err: any, message: any) => any) {
	return socket.on("message", (message: any) => callback(null, message));
}

export function sendMessage(message: string) {
	socket.emit("sendMessage", message, (error: any) => {
		if (error) {
			return console.error(error);
		}

		return console.log("Message OK!");
	});
}
