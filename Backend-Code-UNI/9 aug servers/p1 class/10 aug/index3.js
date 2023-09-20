// Import required modules
const http = require("http"); // Import the HTTP module for creating an HTTP server
const fs = require("fs");     // Import the File System module for working with files

// Create an HTTP server and pass the request handler function
const server = http.createServer(handleRequest);


function handleRequest(req, res) {
    const filename = req.url.substr(1); // Extract the URL path by removing the initial "/"
    
    console.log(filename); // Log the filename (URL path) to the console

    // Call the readData function to read the content of the specified file
    const content = readData(filename);

    // If content is not null (file read successful), write the content to the response
    if (content !== null) {
        res.write(content);
    }

    res.end(); // End the response
}

// Start the HTTP server and listen on port 3000
server.listen(3000, (err) => {
    if (err) {
        console.log("Error in starting Server....");
    } else {
        console.log("Server started at port 3000");
    }
});

// Function to read data from a file
function readData(filename) {
    try {
        return fs.readFileSync(filename, "utf-8"); // Read file content synchronously
    } catch (err) {
        return null; // Return null if an error occurs during file reading
    }
}
