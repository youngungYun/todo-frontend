"use server";

import { revalidatePath } from "next/cache";

export async function ModifyTodo(id: number) {
	const request = {
		id: id,
		description: "수정할 Todo",
		deadline: new Date(),
	};

	const response: Response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_API_URL}/todo`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(request),
		}
	);

	revalidatePath("/");
}
