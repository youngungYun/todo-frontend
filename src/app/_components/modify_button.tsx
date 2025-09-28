"use client";

import Image from "next/image";
import styles from "./modify_button.module.css";
import { useRouter } from "next/navigation";

export default function ModifyButton({ id }: { id: number }) {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/modify/${id}`);
	};

	return (
		<Image
			src="/update_black.svg"
			className={styles.button}
			width={45}
			height={45}
			alt="modify"
			onClick={handleClick}
		></Image>
	);
}
