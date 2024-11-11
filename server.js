((express, server, bodyparser, fs) => {
    server.use(bodyparser.urlencoded({ extended: true}));

    //? to use express.static middleware for serving static files from a directory
    // server.use(express.static);

    server.get('/', (req, res) => {
        fs.readFile('./templates/home.html', 'utf8', (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    });

    server.listen(8000, (err) => {
        console.log(err || "Server is ready at 8000...");
    });



} )(
    require("express"),
    require("express")(),
    require('body-parser'),
    require('fs'),
)