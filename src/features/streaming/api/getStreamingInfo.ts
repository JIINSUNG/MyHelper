export const getStreamingInfo = async (id: string) => {
	const response = await fetch(`/api/streaming/${id}`)
		.then((response) => response.json())
		.catch((error) => {
			alert(error.message);
		});
	return response.data;
};
