import styles from "./page.module.css";
import TodoContainer from "./_components/todo_container";
import CreateButton from "./_components/create_button";

function Title() {
	return <header className={styles.title}>Todo App</header>;
}

export default function Page() {
	return (
		<>
			<div className={styles.container}>
				<Title />
				<CreateButton />
				<TodoContainer />
			</div>
		</>
	);
}
