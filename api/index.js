export default function handler(req, res) {
	res.setHeader("Content-Type", "application/json");
	res.json({ name: req.body });
}
