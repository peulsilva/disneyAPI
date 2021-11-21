const fs = require('fs');
const findMovie = require('./findMovie');

function setRoutes(app){
    
    const movieSet = JSON.parse(fs.readFileSync('disney_API.json'));

    app.get("/list-movies", (req, res)=>{
        res.json(movieSet);
    });

    app.get("/movies/title/:title", (req,res)=>{
        const title = req.params.title;
        console.log(title)
        const movie = findMovie(title, "title", movieSet);
        if (movie){
            res.json(movie);
        }
        else{
            res.status(404).send("Not found");
        };
        
    });

    app.get("/movies/director/:director", (req,res)=>{
        const director = req.params.director;
        console.log(director);
        const movie = findMovie(director, "director", movieSet);
        if (movie){
            res.json(movie);
        }
        else{
            res.status(404).send("Not found");
        };
    });

    app.get("/movies-count", (req, res)=>{
        const object = {
            count: movieSet.length
        };

        res.json(object)
    });
}

module.exports = setRoutes