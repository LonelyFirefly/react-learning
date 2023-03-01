import { useState } from "react";
import { useFormInput } from "./Components/useFormInput";

export default function Form() {
	const firstName = useFormInput("Mary");
	const lastName = useFormInput("Poppins");

	return (
		<>
			<label>
				First Name:
				<input {...firstName} />
			</label>
			<label>
				Last Name:
				<input {...lastName} />
			</label>
			<p>
				<b>
					Good morning, {firstName.value} {lastName.value}.
				</b>
			</p>
		</>
	);
}
