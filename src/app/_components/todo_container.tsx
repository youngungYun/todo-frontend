import Todo from "./todo";
import styles from "./todo_container.module.css";

export default async function TodoContainer() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_API_URL}/todo`
	);

	if (!response.ok) {
		return <div>오류발생...</div>;
	}

	const todos: TodoType[] = await response.json();

	return (
		<main className={styles.main}>
			{todos.map((todo, idx) => (
				<Todo todo={todo} isEven={idx % 2 == 1} key={todo.id} />
			))}
		</main>
	);
}
