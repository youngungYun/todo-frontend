"use client";

import Image from "next/image";
import styles from "./mode_switch.module.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Switch() {
	const [mounted, setMounted] = useState<boolean>(false);
	const { theme, setTheme } = useTheme();

	const handleToggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<Image
			onClick={handleToggleTheme}
			src={theme === "light" ? "/light_mode.svg" : "/dark_mode.svg"}
			className={styles.switch}
			width={60}
			height={60}
			alt="toggle to dark mode"
		/>
	);
}
