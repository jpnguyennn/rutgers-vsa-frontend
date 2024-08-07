import { columns } from "./columns";
import { DataTable } from "./data-table";

import { BoardMember } from "@prisma/client";

async function getBoardMemberData(): Promise<BoardMember[]> {
	const boardMembers = await fetch("http://ruvsa.vercel.app/api/board", {
		next: { revalidate: 1 },
	});

	return boardMembers.json();
}

export default async function BoardDatabase() {
	const data = await getBoardMemberData();

	return (
		<div>
			<h1>Edit Board Members Database</h1>
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={data} />
			</div>
		</div>
	);
}
