// Import necessary classes from the 'http' module
import { IncomingMessage, ServerResponse } from 'http'

// Define a router function to handle HTTP requests
export const router = (req, res) => {
  // Get the requested URL path from the request object
  const path = req.url

  // Check if the requested path is '/hello'
  if (path === '/hello') {
    // Set response headers (status code and content type)
    res.writeHead(200, { 'Content-Type': 'text/plain' })

    // Send 'Hello, World!' as the response body
    res.end('Hello, World!')
  } 
  // Check if the requested path is '/bye'
  else if (path === '/bye') {
    // Set response headers (status code and content type)
    res.writeHead(200, { 'Content-Type': 'text/plain' })

    // Send 'Goodbye, World!' as the response body
    res.end('Goodbye, World!')
  } 
  // If the requested path doesn't match the above, it's a 404 (Not Found)
  else {
    // Set response headers (status code and content type)
    res.writeHead(404, { 'Content-Type': 'text/plain' })

    // Send 'Not found' as the response body
    res.end('Not found')
  }
}
