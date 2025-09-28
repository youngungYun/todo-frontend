"use client";

import { useParams, useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useActionState, useEffect } from "react";
import { ModifyTodo } from "@/app/actions/modify_todo_action";

export default function Page() {
	const router = useRouter();

	const { id } = useParams<{ id: string }>();
	const [state, formAction, isPending] = useActionState(ModifyTodo, null);

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
	}, [state]);

	return (
		<>
			<div className={styles.overlay} onClick={handleClickOvelay}></div>
			<form className={`${styles.flex} ${styles.form}`} action={formAction}>
				<div className={`${styles.deadline} ${styles.flex}`}>
					<input id="id" name="id" value={id} hidden readOnly />
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
						수정
					</button>
					<button type="button" onClick={handleCancel} disabled={isPending}>
						취소
					</button>
				</div>
			</form>
		</>
	);
}
