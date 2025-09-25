import Image from "next/image";
import styles from "./mode_switch.module.css";

export default function Switch() {
	return (
		<Image
			src="/light_mode.svg"
			className={styles.switch}
			width={60}
			height={60}
			alt="mode"
		></Image>
	);
}
