import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Switch from "./_components/mode_switch";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Todo App",
	description: "Todo 저장",
};

const pretendard = localFont({
	src: "./font/PretendardVariable.woff2",
	display: "swap",
});

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: ReactNode;
	modal: ReactNode;
}>) {
	return (
		<html lang="ko" className={pretendard.className} suppressHydrationWarning>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system">
					<div className="wrapper" id="modal-root">
						{modal}
						{children}
					</div>
					<Switch />
				</ThemeProvider>
			</body>
		</html>
	);
}
