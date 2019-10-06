import operSocket from "socket.io-client";

export function useSocket() {
	return operSocket("http://localhost:5000");
}
