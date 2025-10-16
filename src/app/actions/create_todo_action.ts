"use server";

import { revalidatePath } from "next/cache";

export async function CreateTodo(
	_: any,
	formData: FormData
): Promise<{
	status: boolean;
	error: string;
}> {
	const deadline = formData.get("deadline")?.toString();
	const description = formData.get("description")?.toString();

	console.log(deadline, description);

	if (!deadline || !description) {
		return {
			status: false,
			error: "날짜 또는 설명이 비어있습니다.",
		};
	}

	try {
		const response: Response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_API_URL}/todo`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ deadline, description }),
			}
		);
		if (!response.ok) {
			throw new Error(response.statusText);
		}

		revalidatePath("/");

		return {
			status: true,
			error: "",
		};
	} catch {
		return {
			status: false,
			error: "Todo 등록에 실패했습니다.",
		};
	}
}
