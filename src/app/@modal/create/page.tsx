"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { MouseEventHandler } from "react";

export default function Page() {
	const router = useRouter();

	const handleCancel = () => {
		router.back();
	};

	const handleClickOvelay = () => {
		router.back();
	};

	return (
		<>
			<div className={styles.overlay} onClick={handleClickOvelay}></div>
			<form className={`${styles.flex} ${styles.form}`}>
				<div className={`${styles.deadline} ${styles.flex}`}>
					<label htmlFor="deadline">날짜</label>
					<input type="datetime-local" id="deadline"></input>
				</div>
				<div className={`${styles.description} ${styles.flex}`}>
					<label htmlFor="description">내용</label>
					<input type="text" id="description" placeholder="내용"></input>
				</div>
				<div className={styles.button_container}>
					<button type="submit">제출</button>
					<button type="button" onClick={handleCancel}>
						취소
					</button>
				</div>
			</form>
		</>
	);
}
