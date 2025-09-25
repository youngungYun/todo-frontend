import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Switch from "./components/mode_switch";

const pretendard = localFont({
	src: "./font/PretendardVariable.woff2",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className={pretendard.className}>
			<body>
				<div className="wrapper">{children}</div>
				<Switch />
			</body>
		</html>
	);
}
