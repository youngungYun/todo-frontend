import Image from "next/image";
import Todo from "./components/todo";
import styles from "./page.module.css";

function CreateButton() {
	return (
		<Image
			src="/add_black.svg"
			className={styles.create_button}
			width={50}
			height={50}
			alt="create"
		></Image>
	);
}

function Title() {
	return <div className={styles.title}>✅Todo App</div>;
}

function ScrollButton({ src }: { src: string }) {
	return (
		<Image
			src={src}
			className={styles.scroll_button}
			width={50}
			height={50}
			alt="create"
		></Image>
	);
}

export default function Page() {
	return (
		<>
			<div className={styles.container}>
				<Title />
				<CreateButton />
				<main className={styles.main}>
					<Todo />
					<Todo />
					<Todo />
					<Todo />
				</main>
			</div>
			<div className={styles.scroll_div}>
				<ScrollButton src={"/arrow_back_black.svg"} />
				<ScrollButton src={"/arrow_forward_black.svg"} />
			</div>
		</>
	);
}
