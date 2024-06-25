export function formatMemberSince(inputDateString) {
	const options = { month: "short", day: "2-digit", year: "numeric" };
	const formattedDate = new Date(inputDateString).toLocaleDateString("pt-BR", options);
	return formattedDate;
}

export function formatDate(inputDateString) {
	const months = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro",
	];

	const date = new Date(inputDateString);
	const monthName = months[date.getMonth()];
	const day = date.getDate();
	const year = date.getFullYear();

	
	function getOrdinalSuffix(day) {
		if (day >= 11 && day <= 13) {
			return day + " de";
		}
		switch (day % 10) {
			case 1:
				return day + " de";
			case 2:
				return day + " de";
			case 3:
				return day + " de";
			default:
				return day + " de";
		}
	}

	const formattedDate = `${getOrdinalSuffix(day)} ${monthName} de ${year}`;
	return formattedDate;
}