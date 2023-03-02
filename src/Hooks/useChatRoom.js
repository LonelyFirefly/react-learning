import { useEffect } from "react";
import { useEffect } from "react";
import { createConnection } from "./chat.js";
import { showNotification } from "./notifications.js";

export function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
	const onMessage = useEffectEvent(onReceiveMessage);

	useEffect(() => {
		const options = {
			serverUrl: serverUrl,
			roomId: roomId,
		};
		const connection = createConnection(options);
		connection.on("message", (msg) => {
			onMessage();
		});
		connection.connect();
		return () => connection.disconnect();
	}, [roomId, serverUrl]);
}
