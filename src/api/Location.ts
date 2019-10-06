import { useSocket } from "../hooks/useSocket";

const socket = useSocket();

export function sendUserLocation(callback: (err: any, response: any) => any) {
	if (!navigator.geolocation) {
		callback("Geolocation is not supported by your browser", null);
	}

	navigator.geolocation.getCurrentPosition(position => {
		const lat = position.coords.latitude;
		const long = position.coords.longitude;

		socket.emit("sendLocation", { lat, long }, () => {
			callback(null, "Location shared");
		});
	});
}
