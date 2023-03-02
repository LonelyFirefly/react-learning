import useOnlineStatus from "./Components/useOnlineStatus.js";

function StatusBar() {
	const isOnline = useOnlineStatus();
	return <h1> {isOnline ? "✅ Online" : "❌ Disconnected"} </h1>;
}

function SaveButton() {
	const isOnline = useOnlineStatus();

	function handleSaveClick() {
		console.log("✅ Progress saved");
	}

	return <button>{isOnline ? "Save progress" : "Reconnecting..."}</button>;
}

export default function App() {
	return (
		<>
			<SaveButton />
			<StatusBar />
		</>
	);
}
