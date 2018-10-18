function convertHTML(str) {
    const htmlEntities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&apos;",
            '"': "&quot;"
        };
	return str.replace(/&|<|>|'|"/g, (match) => { return htmlEntities[match]; });
}
convertHTML("Dolce & Gabbana");