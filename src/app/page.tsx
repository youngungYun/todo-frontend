import Todo from "./components/todo";
import styles from "./page.module.css";

function CreateButton() {
	return <div className={styles.create_button}></div>;
}

function Title() {
	return <div className={styles.title}>✅Todo App</div>;
}

export default function Page() {
	return (
		<div className={styles.container}>
			<Title />
			<CreateButton />
			<main>
				<Todo />
				<Todo />
				<Todo />
			</main>
		</div>
	);
}
