"use client";

import styles from "./todo.module.css";
import { useEffect, useState } from "react";
import ModifyButton from "./modify_button";
import DeleteButton from "./delete_button";

function Deadline({ deadline, current }: { deadline: Date; current: Date }) {
	return (
		<div
			className={`${styles.deadline} ${
				deadline < current ? styles.passed : null
			}`}
		>
			<div>{deadline.toLocaleDateString("ko-KR")}</div>
			<div>
				{deadline.toLocaleTimeString("ko-KR", {
					hour12: false,
					hour: "2-digit",
					minute: "2-digit",
				})}
			</div>
		</div>
	);
}

function Description({ description }: { description: string }) {
	return <div className={styles.description}>{description}</div>;
}

export default function Todo({
	todo,
	isEven,
}: {
	todo: TodoType;
	isEven: boolean;
}) {
	const [current, setCurrent] = useState<Date>(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent(() => new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<article className={`${styles.container} ${isEven && styles.even}`}>
			<Deadline deadline={new Date(todo.deadline)} current={current} />
			<Description description={todo.description} />
			<div className={styles.button_container}>
				<ModifyButton id={todo.id} />
				<DeleteButton id={todo.id} />
			</div>
		</article>
	);
}
