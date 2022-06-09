export default function handler(req, res) {
	const { name } = req.body;

	res.setHeader("Content-Type", "application/json");
	res.json({ name: name });
}
