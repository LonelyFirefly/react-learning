import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Section({ children }) {
	const level = useContext(LevelContext);
	return (
		<section>
			<LevelContext.Provider value={level + 1}>
				{children}
			</LevelContext.Provider>
		</section>
	);
}
