import { IncomingMessage, ServerResponse } from 'http'

export const router = (req, res) => {
	const path = req.url
	if (path === '/hello') {
		res.writeHead(200, { 'Content-Type': 'text/plain' })
		res.end('Hello, World!')
	} else if (path === '/bye') {
		res.writeHead(200, { 'Content-Type': 'text/plain' })
		res.end('Goodbye, World!')
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' })
		res.end('Not found')
	}
}
