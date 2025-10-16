"use server";

import { revalidatePath } from "next/cache";

export async function ModifyTodo(
	_: any,
	formData: FormData
): Promise<{
	status: boolean;
	error: string;
}> {
	const id = formData.get("id")?.toString();
	const deadline = formData.get("deadline")?.toString();
	const description = formData.get("description")?.toString();

	console.log(id, deadline, description);

	if (!id || !deadline || !description) {
		return {
			status: false,
			error: "일부 요청이 없습니다.",
		};
	}

	try {
		const response: Response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_API_URL}/todo`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id, deadline, description }),
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
			error: "Todo 수정에 실패했습니다.",
		};
	}
}
