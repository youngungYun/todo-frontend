import Image from "next/image";
import styles from "./delete_button.module.css";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: number }) {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/delete/${id}`);
	};

	return (
		<Image
			src="/delete_black.svg"
			className={`${styles.button}`}
			width={45}
			height={45}
			alt="delete"
			onClick={handleClick}
		></Image>
	);
}
