const today = new Date();

function formatDate(date) {
	return new Intl.DateTimeFormat("en-Us", { weekday: "long" }).format(date);
}

export default function App() {
	const person = {
		name: "Gregorio Y. Zara",
		theme: {
			backgroundColor: "black",
			color: "pink",
		},
	};

	return (
		<div style={person.theme}>
			<h1> {person.name}'s Todos </h1>
			<img
				className="avatar"
				src="https://i.imgur.com/7vQD0fPs.jpg"
				alt="Gregorio Y. Zara"
			/>
			<ul>
				<li>Improve the videophone</li>
				<li>Prepare aeronautics lectures</li>
				<li>Work on the alcohol-fuelled engine</li>
			</ul>
		</div>
	);
}
