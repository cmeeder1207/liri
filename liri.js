require("dotenv").config();




//-------------------------------VARS AND KEYS--------------------------------//
var keys = require("./keys.js");
var fs = require("fs"); 
var request = require("request");
var Spotify = require('node-spotify-api');
var spotifyKeys = new Spotify(keys.spotify);
var command = process.argv[2];
var nodeArgs = process.argv;
var commandName = nodeArgs;
var queryUrlM = "http://www.omdbapi.com/?t=" + commandName + "&y=&plot=short&apikey=trilogy";
var queryUrlB = "https://rest.bandsintown.com/artists/" + commandName + "/events?app_id=codingbootcamp"

// NPM module used for logging solution.






for (var i = 3; i < nodeArgs.length; i++) {

  if (i > nodeArgs.length) {

    commandName+= "+" + nodeArgs[i];

  }

  else {

    commandName += nodeArgs[i];

  }
}

//--------------------------SPOTIFY---------------------------//
if(command==="spotify-this"){
var song = process.argv[2]

var stringifysong=JSON.stringify(song)
console.log(stringifysong)
 
spotifyKeys.search({ type: 'track', query: song }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

var chicken = data.tracks.items;

  chicken.forEach(chick => {
    console.log(chick.name)
    console.log(chick.artists[0].name) 
    console.log(chick.album.name)
    console.log(chick.href)
    console.log('----------------********************----------------')
  })
});
};
//-----------------------------OMDB---------------------------//
if(command==="movie-this")

// console.log(queryUrlM);


request(queryUrlM, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    
    console.log("Movie Title: " + JSON.parse(body).Title);
	   console.log("Release Year: " + JSON.parse(body).Year);
     console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
     console.log("RT Rating: " + JSON.parse(body).Ratings[1].Value);
	   console.log("Country Produced In: " + JSON.parse(body).Country);
	   console.log("Language: " + JSON.parse(body).Language);
	   console.log("Plot: " + JSON.parse(body).Plot);
	   console.log("Actors: " + JSON.parse(body).Actors);
  }
});


//----------------------------------BANDS IN TOWN-----------//
if(command==="concert-this"){


  // console.log("you looked for a concert")
  
  request(queryUrlB, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(JSON.parse(body)[0].venue);

}}
)}
//------------OTHER THING I DONT KNOW THE NAME OF--------///////////

if(command="do-what-it-says"){
  fs.readFile("random.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
  
    // We will then print the contents of data
    console.log(data);
  
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
  
    // We will then re-display the content as an array for later use.
    console.log(dataArr);
  
  });


}
//////////////////////////LOGGER//////////////////////////////////////
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'random.txt' })
  ]
});