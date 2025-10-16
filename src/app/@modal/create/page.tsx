"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useActionState, useEffect } from "react";
import { CreateTodo } from "@/app/actions/create_todo_action";

export default function Page() {
	const router = useRouter();

	const [state, formAction, isPending] = useActionState(CreateTodo, null);

	const handleCancel = () => {
		router.back();
	};

	const handleClickOvelay = () => {
		router.back();
	};

	useEffect(() => {
		if (!state) {
			return;
		}
		if (state.status) {
			router.back();
		} else {
			alert(state.error);
		}
	}, [state, router]);

	return (
		<>
			<div className={styles.overlay} onClick={handleClickOvelay}></div>
			<form className={`${styles.flex} ${styles.form}`} action={formAction}>
				<div className={`${styles.deadline} ${styles.flex}`}>
					<label htmlFor="deadline">날짜</label>
					<input
						type="datetime-local"
						id="deadline"
						name="deadline"
						required
						disabled={isPending}
					></input>
				</div>
				<div className={`${styles.description} ${styles.flex}`}>
					<label htmlFor="description">내용</label>
					<input
						type="text"
						id="description"
						name="description"
						placeholder="내용"
						required
						disabled={isPending}
					></input>
				</div>
				<div className={styles.button_container}>
					<button type="submit" disabled={isPending}>
						제출
					</button>
					<button type="button" onClick={handleCancel} disabled={isPending}>
						취소
					</button>
				</div>
			</form>
		</>
	);
}
