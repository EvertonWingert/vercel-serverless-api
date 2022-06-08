export default function handler(req, res) {
	res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");
	res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate=59");
	res.json({ name: "John Doe", date: new Date() });
}
