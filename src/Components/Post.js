import Heading from "./Heading";
import Section from "./Section";

export default function Post({ title, body }) {
	return (
		<Section>
			<Heading>{title}</Heading>
		</Section>
	);
}
