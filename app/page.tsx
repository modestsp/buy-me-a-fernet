import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
	const [error, setError] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const presets = [1, 3, 5];

	return (
		<div>
			<h1>Buy me a fernet!</h1>
			{presets.map((preset) => {
				return (
					<button key={preset} onClick={() => setQuantity(preset)}>
						{preset}
					</button>
				);
			})}
			<input
				type="number"
				onChange={(e) => setQuantity(parseFloat(e.target.value))}
				name=""
				id=""
			/>

			<button>Donate ${quantity}</button>
		</div>
	);
}
