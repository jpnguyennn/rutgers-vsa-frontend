import {
	Inter,
	Lato,
	Playfair_Display,
	Slackside_One,
	WindSong,
} from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import CompleteLayout from "@/components/layout/CompleteLayout";
import NextAuthProvider from "@/components/layout/NextAuthProvider";

const inter = Inter({
	subsets: ["latin"],
	weight: ["500"],
	variable: "--font-inter",
});
const pfdisplay = Playfair_Display({
	subsets: ["latin", "vietnamese"],
	display: "swap",
	variable: "--font-playfair-display",
});
const lato = Lato({
	weight: ["700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-lato",
});
const windsong = WindSong({
	weight: ["400"],
	subsets: ["latin", "vietnamese"],
	display: "swap",
	variable: "--font-windsong",
});
const slackside = Slackside_One({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-slackside",
});

export const metadata = {
	title: `RUVSA | HOME`,
	description: "The Rutgers VSA and VCDC Official Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<NextAuthProvider>
				<body
					className={`${inter.variable} ${pfdisplay.variable} ${lato.variable} ${windsong.variable} ${slackside.variable}`}
				>
					<CompleteLayout>{children}</CompleteLayout>
				</body>
			</NextAuthProvider>
		</html>
	);
}
