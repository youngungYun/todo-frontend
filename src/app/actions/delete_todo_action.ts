"use server";

import { revalidatePath } from "next/cache";

export async function DeleteTodo(
	_: any,
	formData: FormData
): Promise<{
	status: boolean;
	error: string;
}> {
	const id = formData.get("id")?.toString();

	console.log(id);

	if (!id) {
		return {
			status: false,
			error: "id가 없습니다.",
		};
	}

	try {
		const response: Response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_API_URL}/todo/${id}`,
			{
				method: "DELETE",
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
			error: "Todo 삭제에 실패했습니다.",
		};
	}
}
