"use client";

import styles from "./create_button.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CreateButton() {
	const router = useRouter();

	const handleClick = () => {
		router.push("/create");
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
