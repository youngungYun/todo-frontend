"use client";

import { useParams, useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useActionState, useEffect } from "react";
import { DeleteTodo } from "@/app/actions/delete_todo_action";

export default function Page() {
	const router = useRouter();

	const { id } = useParams<{ id: string }>();
	const [state, formAction, isPending] = useActionState(DeleteTodo, null);

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
				<input id="id" name="id" defaultValue={id} hidden readOnly />
				<div>삭제하시겠습니까?</div>
				<div className={styles.button_container}>
					<button type="submit" disabled={isPending}>
						삭제
					</button>
					<button type="button" onClick={handleCancel} disabled={isPending}>
						취소
					</button>
				</div>
			</form>
		</>
	);
}
