import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export async function GET() {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	const directoryPath = path.resolve(__dirname, '../../../static/files');

	const files = fs
		.readdirSync(directoryPath)
		.filter((file) => file !== '+page.svelte' && file !== '+server.js');

	const fileDetails = files.map((file) => {
		const filePath = path.join(directoryPath, file);
		const stats = fs.statSync(filePath);
		return {
			name: file,
			url: `/files/${file}`,
			size: stats.size
		};
	});

	return new Response(JSON.stringify(fileDetails), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
