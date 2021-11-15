function findMovie(filter, type, movieArray){
    filter = filter.toLowerCase()
    switch (type){
        case "title":
            return movieArray.filter( movie => {
                const title = movie.title.toLowerCase();
                return title.includes(filter)
            });
        case "director":
            return movieArray.filter( movie => {
                let director= movie["Directed by"];
                console.log(director);

                if (typeof(director) ==="object"){
                    director = director.join(" ");
                }

                if (director){
                    director = director.toLowerCase();
                    return director.includes(filter);
                }
                    
                return false;
            });
    };
};

module.exports= findMovie