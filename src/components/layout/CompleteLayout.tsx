"use client";

import { usePathname } from "next/navigation";
import React from "react";

import { cn } from "@/lib/utils";

import AdminSidebar from "./AdminSidebar";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	weight: ["500"],
	variable: "--font-inter",
});

export default function CompleteLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathName = usePathname();
	return pathName.includes("/admin") ? (
		<div
			className={`${cn(
				"h-screen w-full bg-white text-black flex overflow-hidden",
				inter.className
			)} ${inter.variable}`}
		>
			<AdminSidebar />
			{children}
		</div>
	) : (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
