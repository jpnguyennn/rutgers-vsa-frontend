import "@/app/globals.css";

import dynamic from "next/dynamic";
import { Inter, Lato, Playfair_Display, WindSong } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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

export const metadata = {
	title: `RUVSA | BOARD`,
	description: "Generated by create next app",
};

const NavbarSSR = dynamic(() => import("@/components/layout/Navbar"), {
	ssr: false,
});
const FooterSSR = dynamic(() => import("@/components/layout/Footer"), {
	ssr: false,
});

export default function BoardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<body
			className={`${inter.variable} ${pfdisplay.variable} ${lato.variable} ${windsong.variable}`}
		>
			<NavbarSSR />
			{children}
			<FooterSSR />
		</body>
	);
}