import Image from "next/image";
import styles from "./todo.module.css";

function Deadline() {
	return (
		<div className={styles.deadline}>
			2025-12-25
			<br />
			12:00
		</div>
	);
}

function Description() {
	return <div className={styles.description}>Description</div>;
}

function ModifyButton() {
	return (
		<Image
			src="/update_black.svg"
			className={styles.button}
			width={45}
			height={45}
			alt="modify"
		></Image>
	);
}

function DeleteButton() {
	return (
		<Image
			src="/delete_black.svg"
			className={styles.button}
			width={45}
			height={45}
			alt="modify"  
		></Image>
	);
}

export default function Todo() {
	return (
		<article className={styles.container}>
			<Deadline />
			<Description />
			<div className={styles.button_container}>
				<ModifyButton />
				<DeleteButton />
			</div>
		</article>
	);
}
