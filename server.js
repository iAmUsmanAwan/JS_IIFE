// TODO: IIFE to use express.static middleware for serving static files from a directory. 
//^ This code is an Immediately Invoked Function Expression (IIFE) that sets up an Express.js server.

//* The IIFE pattern is used here to create a local scope for these variables and to organize the server setup code. This approach can help avoid polluting the global scope and provide a clean way to initialize the server.

((express, server, bodyparser, fs) => {   //? The function is defined and immediately called with four parameters: express, server, bodyparser, and fs.
    
    server.use(bodyparser.urlencoded({ extended: true}));
    
    //? to use express.static middleware for serving static files from a directory
    // server.use(express.static);
    //* Note that the express.static middleware is currently commented out. To serve static files, we would need to uncomment and properly configure this line, specifying the directory from which to serve static files.

    server.get('/', (req, res) => {
        fs.readFile('./templates/home.html', 'utf8', (err, results) => {   //? It defines a route for the root path ('/') that reads a file named 'home.html' from the './templates' directory and sends its contents as the response.
            if (err) throw err;
            res.send(results);
        });
    });

    server.listen(8000, (err) => {    //? Starts the server on port 8000 and logs an error message if one occurs.
        console.log(err || "Server is ready at 8000...");
    });
    
    
} )(    //? The IIFE function is called with the required modules as arguments.
    require("express"),   // The Express.js framework
    require("express")(),  // The server object  //? It's used to create an instance of an Express application.
    require('body-parser'),    // Middleware for handling JSON and URL-encoded data //? It parses incoming requests with JSON payloads and exposes methods for extracting the parsed data.
    require('fs'),    // The built-in module for reading and writing files //? It provides an asynchronous API for reading and writing files. // Node.js file system module
)