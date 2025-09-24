function Deadline() {
	return <div>2025-12-25 12:00</div>;
}

function Description() {
	return <div>Description</div>;
}

function ModifyButton() {
	return <div>M</div>;
}

function DeleteButton() {
	return <div>D</div>;
}

export default function Todo() {
	return (
		<article>
			<Deadline />
			<Description />
			<div>
				<ModifyButton />
				<DeleteButton />
			</div>
		</article>
	);
}
