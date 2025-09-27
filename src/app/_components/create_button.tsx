"use client";

import { CreateTodo } from "../actions/create_todo_action";
import styles from "./create_button.module.css";
import Image from "next/image";

export default function CreateButton() {
	const handleClick = async () => {
		const result = await CreateTodo();
		alert(result.id);
	};
	return (
		<Image
			src="/add_black.svg"
			className={styles.create_button}
			width={60}
			height={60}
			alt="create"
			onClick={handleClick}
		></Image>
	);
}
