"use server";

import { revalidatePath } from "next/cache";

export async function DeleteTodo(id: number): Promise<void> {
	console.log(`${id} 삭제`);
	const response: Response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_API_URL}/todo/${id}`,
		{
			method: "DELETE",
		}
	);
	revalidatePath("/");
}
