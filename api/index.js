export default function handler(req, res) {
	if (req.method !== "POST") return;

	const { name } = req.body;

	res.json({ name });
}
