"use server";

import { revalidatePath } from "next/cache";

export async function CreateTodo(): Promise<{ id: string }> {
	const request = {
		description: "생성한 Todo",
		deadline: new Date(),
	};

	const response: Response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_API_URL}/todo`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(request),
		}
	);

	// 백엔드에서 { id: string } 같은 JSON을 리턴한다고 가정
	const result = await response.json();

	console.log(result);
	revalidatePath("/");
	return result;
}
