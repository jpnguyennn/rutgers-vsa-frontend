"use client";

import { BoardMember } from "@/lib/interfaces/admin";
import "@/styles/board.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Separator } from "../ui/separator";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function BoardPort({ member }: { member: BoardMember }) {
	const rotation: number = Math.random() * 3 - 1.5;
	console.log(rotation);

	return (
		<div>
			<div className="mx-5 p-2 min-h-full sticky justify-center items-center lg:p-4">
				<div className="mb-5">
					<div className="align-center items-center text-center justify-center font-titles max-h-[2em]">
						<p className="text-2xl whitespace-nowrap">
							<strong>{member.position}</strong>
						</p>
					</div>
					<div
						className="m-[10px] justify-center items-center text-center"
						id="overlay"
					>
						<div className="font-board-name text-2xl max-h-[1em] whitespace-nowrap">
							{member.full_name}
						</div>
					</div>
				</div>
				<div>
					<Dialog>
						<DialogTrigger>
							<div
								className={`flex justify-center items-center mb-10 p-10 bg-white/95 backdrop-blur-sm shadow-2xl border border-white/100 rotate-[--rotation-angle] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0`}
								id="port_container"
								style={
									{
										"--rotation-angle": `${rotation}deg`,
									} as React.CSSProperties
								}
							>
								<Image
									src={`https://res.cloudinary.com/rutgers-vsa/${member.photo_url}`}
									alt={member.full_name}
									width={1000}
									height={1000}
									className="w-full rounded-lg"
								/>
							</div>
						</DialogTrigger>
						<DialogContent className="lg:min-w-max rounded-xl">
							<DialogTitle>
								<p className="text-center text-2xl">
									{member.position}
								</p>
							</DialogTitle>
							<div className="flex-col lg:max-w-full lg:flex lg:flex-row">
								<div className="lg:mr-10 lg:min-w-max justify-center items-center">
									<div className="sm:max-w-[275px] mx-auto">
										<Image
											src={`https://res.cloudinary.com/rutgers-vsa/${member.photo_url}`}
											alt={member.full_name}
											width={300}
											height={300}
											className="w-full rounded-lg"
										/>
									</div>
								</div>
								<div className="mt-5 lg:mt-0 max-w-sm lg:min-w-min lg:max-w-2xl">
									<h1 className="sm:text-[2.5rem] whitespace-nowrap">
										{member.full_name}
									</h1>
									<div className="mt-2 lg:mt-5">
										<h2 className="sm:text-[1rem]">
											Class: {member.year}
										</h2>
										<h2 className="sm:text-[1rem]">
											Major: {member.major}
										</h2>
										{member.minor !== "" && (
											<h2 className="sm:text-[1rem]">Minor: {member.minor}</h2>
										)}
										<div className="flex mt-2">
											<Link
												href={`https://www.instagram.com/${member.instagram}`}
												target="_blank"
												className="min-w-[40px] min-h-[40px]"
											>
												<div className="p-1 px-2 border-2 border-[#C13584] rounded-2xl text-[#C13584] duration-200 hover:bg-[#C13584] hover:text-white flex justify-center items-center">
													<h2>
														<FontAwesomeIcon
															icon={faInstagram}
														/>
													</h2>
												</div>
											</Link>
											<Link href={`mailto:${member.vsa_email}`} target="_blank" className="ml-2">
											<div className="p-1 px-2 border-2 border-[#A9A9A9] rounded-2xl text-[#A9A9A9] duration-200 hover:bg-[#A9A9A9] hover:text-white flex justify-center items-center">
													<h2>
														<FontAwesomeIcon
															icon={faEnvelope}
														/>
													</h2>
												</div>
											</Link>
										</div>
									</div>

									<Separator className="my-5" />
									<h2>Why VSA?</h2>
									<p className="sm:text-[.8rem] whitespace-normal">
										{member.why_vsa}
									</p>
								</div>
							</div>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	);
}

export default BoardPort;
