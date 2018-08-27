require("dotenv").config();




//-------------------------------VARS AND KEYS--------------------------------//
var keys = require("./keys.js");
var fs = require("fs"); 
var request = require("request");
var Spotify = require('node-spotify-api');
var spotifyKeys = new Spotify(keys.spotify);
var command = process.argv[2];
var nodeArgs = process.argv[3]&&process.argv[4];
var commandName = nodeArgs;
var queryUrlM = "http://www.omdbapi.com/?t=" + commandName + "&y=&plot=short&tomatoes=true&r=json&apikey=trilogy";
var queryUrlB = "https://rest.bandsintown.com/artists/" + commandName + "/events?app_id=codingbootcamp"

// NPM module used for logging solution.





if(command != "do-what-it-says")
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

var stringifySong=JSON.stringify(song)

 
spotifyKeys.search({ type: 'track', query: song }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

var songVar = data.tracks.items;

  songVar.forEach(song => {
    console.log(song.name)
    console.log(song.artists[0].name) 
    console.log(song.album.name)
    console.log(song.href)
    console.log('----------------********************----------------')
  })
});
};
//-----------------------------OMDB---------------------------//
if(command==="movie-this"){

// console.log(queryUrlM);



request(queryUrlM, function(error, response, body) {

  


  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    

    console.log("Movie Title: " + JSON.parse(body).Title);
	   console.log("Release Year: " + JSON.parse(body).Year);
     console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
     console.log("Rotten Tomato Rating: " + JSON.parse(body).Ratings[1].Value);
	   console.log("Country Produced In: " + JSON.parse(body).Country);
	   console.log("Language: " + JSON.parse(body).Language);
	   console.log("Plot: " + JSON.parse(body).Plot);
	   console.log("Actors: " + JSON.parse(body).Actors);
  }
});
};

//----------------------------------BANDS IN TOWN-----------//
if(command==="concert-this"){


  
  request(queryUrlB, function(error, response, body) {

 
    if (!error && response.statusCode === 200) {
      console.log(JSON.parse(body));

}
else{console.log("error")}}
)}
//-----------DO WHAT IT SAYS--------///////////

if(command==="do-what-it-says"){
  fs.readFile("random.txt", "utf8", function(error, data) {


    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
    else{
    
    
    // We will then print the contents of data
    console.log();
   
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
 
  var cmd=require('node-cmd');

    cmd.run("n liri.js" + dataArr);
  
   
    if(!log.txt){
cmd.run('touch log.txt');
fs.writeFile("beans.html",'<!DOCTYPE html> <html> <head> <meta charset="utf-8"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <title>beans</title> <meta name="viewport" content="width=device-width, initial-scale=1"> <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script> <script>var x=Math.floor(Math.random() * Math.floor(max)*10) $.fn.autoscroll.defaults={start:{step: 50, scroll: true, direction: "down", pauseOnHover: true}}; </script> <style>body{background-image: url(https://i.imgur.com/TToILPm.jpg)}.animation-target{-webkit-animation: animation 1500ms linear infinite both; animation: animation 1500ms linear infinite both;}/* Generated with Bounce.js. Edit at https://goo.gl/FKGVkN */ @-webkit-keyframes animation{0%{-webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50, 0, 0, 1);}2.14%{-webkit-transform: matrix3d(1.133, 0, 0, 0, 0, 1.133, 0, 0, 0, 0, 1, 0, -10.872, 0, 0, 1); transform: matrix3d(1.133, 0, 0, 0, 0, 1.133, 0, 0, 0, 0, 1, 0, -10.872, 0, 0, 1);}2.87%{-webkit-transform: matrix3d(1.152, 0, 0, 0, 0, 1.152, 0, 0, 0, 0, 1, 0, 1.427, 0, 0, 1); transform: matrix3d(1.152, 0, 0, 0, 0, 1.152, 0, 0, 0, 0, 1, 0, 1.427, 0, 0, 1);}4.27%{-webkit-transform: matrix3d(1.165, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 21.718, 0, 0, 1); transform: matrix3d(1.165, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 21.718, 0, 0, 1);}5.74%{-webkit-transform: matrix3d(1.155, 0, 0, 0, 0, 1.155, 0, 0, 0, 0, 1, 0, 37.859, 0, 0, 1); transform: matrix3d(1.155, 0, 0, 0, 0, 1.155, 0, 0, 0, 0, 1, 0, 37.859, 0, 0, 1);}8.48%{-webkit-transform: matrix3d(1.106, 0, 0, 0, 0, 1.106, 0, 0, 0, 0, 1, 0, 54.772, 0, 0, 1); transform: matrix3d(1.106, 0, 0, 0, 0, 1.106, 0, 0, 0, 0, 1, 0, 54.772, 0, 0, 1);}8.61%{-webkit-transform: matrix3d(1.104, 0, 0, 0, 0, 1.104, 0, 0, 0, 0, 1, 0, 55.228, 0, 0, 1); transform: matrix3d(1.104, 0, 0, 0, 0, 1.104, 0, 0, 0, 0, 1, 0, 55.228, 0, 0, 1);}11.48%{-webkit-transform: matrix3d(1.051, 0, 0, 0, 0, 1.051, 0, 0, 0, 0, 1, 0, 59.333, 0, 0, 1); transform: matrix3d(1.051, 0, 0, 0, 0, 1.051, 0, 0, 0, 0, 1, 0, 59.333, 0, 0, 1);}12.61%{-webkit-transform: matrix3d(1.035, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 58.914, 0, 0, 1); transform: matrix3d(1.035, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 58.914, 0, 0, 1);}16.82%{-webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 54.22, 0, 0, 1); transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 54.22, 0, 0, 1);}18.89%{-webkit-transform: matrix3d(0.994, 0, 0, 0, 0, 0.994, 0, 0, 0, 0, 1, 0, 52.063, 0, 0, 1); transform: matrix3d(0.994, 0, 0, 0, 0, 0.994, 0, 0, 0, 0, 1, 0, 52.063, 0, 0, 1);}20.95%{-webkit-transform: matrix3d(0.992, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, 50.578, 0, 0, 1); transform: matrix3d(0.992, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, 50.578, 0, 0, 1);}26.29%{-webkit-transform: matrix3d(0.996, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 49.377, 0, 0, 1); transform: matrix3d(0.996, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 49.377, 0, 0, 1);}33.23%{-webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 49.833, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 49.833, 0, 0, 1);}33.33%{-webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 49.84, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 49.84, 0, 0, 1);}35.14%{-webkit-transform: matrix3d(21.709, 0, 0, 0, 0, 0.825, 0, 0, 0, 0, 1, 0, 16.689, 0, 0, 1); transform: matrix3d(21.709, 0, 0, 0, 0, 0.825, 0, 0, 0, 0, 1, 0, 16.689, 0, 0, 1);}36.2%{-webkit-transform: matrix3d(26.339, 0, 0, 0, 0, 0.786, 0, 0, 0, 0, 1, 0, -1.468, 0, 0, 1); transform: matrix3d(26.339, 0, 0, 0, 0, 0.786, 0, 0, 0, 0, 1, 0, -1.468, 0, 0, 1);}36.87%{-webkit-transform: matrix3d(27.027, 0, 0, 0, 0, 0.78, 0, 0, 0, 0, 1, 0, -11.684, 0, 0, 1); transform: matrix3d(27.027, 0, 0, 0, 0, 0.78, 0, 0, 0, 0, 1, 0, -11.684, 0, 0, 1);}37.64%{-webkit-transform: matrix3d(26.219, 0, 0, 0, 0, 0.787, 0, 0, 0, 0, 1, 0, -22.158, 0, 0, 1); transform: matrix3d(26.219, 0, 0, 0, 0, 0.787, 0, 0, 0, 0, 1, 0, -22.158, 0, 0, 1);}39.07%{-webkit-transform: matrix3d(21.656, 0, 0, 0, 0, 0.825, 0, 0, 0, 0, 1, 0, -37.856, 0, 0, 1); transform: matrix3d(21.656, 0, 0, 0, 0, 0.825, 0, 0, 0, 0, 1, 0, -37.856, 0, 0, 1);}39.67%{-webkit-transform: matrix3d(19.081, 0, 0, 0, 0, 0.847, 0, 0, 0, 0, 1, 0, -42.943, 0, 0, 1); transform: matrix3d(19.081, 0, 0, 0, 0, 0.847, 0, 0, 0, 0, 1, 0, -42.943, 0, 0, 1);}41.11%{-webkit-transform: matrix3d(12.544, 0, 0, 0, 0, 0.902, 0, 0, 0, 0, 1, 0, -51.865, 0, 0, 1); transform: matrix3d(12.544, 0, 0, 0, 0, 0.902, 0, 0, 0, 0, 1, 0, -51.865, 0, 0, 1);}41.94%{-webkit-transform: matrix3d(8.958, 0, 0, 0, 0, 0.933, 0, 0, 0, 0, 1, 0, -55.212, 0, 0, 1); transform: matrix3d(8.958, 0, 0, 0, 0, 0.933, 0, 0, 0, 0, 1, 0, -55.212, 0, 0, 1);}42.48%{-webkit-transform: matrix3d(6.867, 0, 0, 0, 0, 0.95, 0, 0, 0, 0, 1, 0, -56.752, 0, 0, 1); transform: matrix3d(6.867, 0, 0, 0, 0, 0.95, 0, 0, 0, 0, 1, 0, -56.752, 0, 0, 1);}44.81%{-webkit-transform: matrix3d(0.249, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, -59.318, 0, 0, 1); transform: matrix3d(0.249, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, -59.318, 0, 0, 1);}45.28%{-webkit-transform: matrix3d(-0.555, 0, 0, 0, 0, 1.013, 0, 0, 0, 0, 1, 0, -59.239, 0, 0, 1); transform: matrix3d(-0.555, 0, 0, 0, 0, 1.013, 0, 0, 0, 0, 1, 0, -59.239, 0, 0, 1);}48.01%{-webkit-transform: matrix3d(-2.417, 0, 0, 0, 0, 1.029, 0, 0, 0, 0, 1, 0, -56.83, 0, 0, 1); transform: matrix3d(-2.417, 0, 0, 0, 0, 1.029, 0, 0, 0, 0, 1, 0, -56.83, 0, 0, 1);}52.22%{-webkit-transform: matrix3d(-0.516, 0, 0, 0, 0, 1.013, 0, 0, 0, 0, 1, 0, -52.062, 0, 0, 1); transform: matrix3d(-0.516, 0, 0, 0, 0, 1.013, 0, 0, 0, 0, 1, 0, -52.062, 0, 0, 1);}53.55%{-webkit-transform: matrix3d(0.213, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, -51.024, 0, 0, 1); transform: matrix3d(0.213, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, -51.024, 0, 0, 1);}54.32%{-webkit-transform: matrix3d(0.564, 0, 0, 0, 0, 1.004, 0, 0, 0, 0, 1, 0, -50.56, 0, 0, 1); transform: matrix3d(0.564, 0, 0, 0, 0, 1.004, 0, 0, 0, 0, 1, 0, -50.56, 0, 0, 1);}55.99%{-webkit-transform: matrix3d(1.115, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, -49.855, 0, 0, 1); transform: matrix3d(1.115, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, -49.855, 0, 0, 1);}59.09%{-webkit-transform: matrix3d(1.449, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, -49.385, 0, 0, 1); transform: matrix3d(1.449, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, -49.385, 0, 0, 1);}59.63%{-webkit-transform: matrix3d(1.442, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, -49.378, 0, 0, 1); transform: matrix3d(1.442, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, -49.378, 0, 0, 1);}66.67%{-webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.84, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.84, 0, 0, 1);}70.24%{-webkit-transform: matrix3d(0.941, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.997, 0, 0, 1); transform: matrix3d(0.941, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.997, 0, 0, 1);}74.44%{-webkit-transform: matrix3d(0.974, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50.042, 0, 0, 1); transform: matrix3d(0.974, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50.042, 0, 0, 1);}81.38%{-webkit-transform: matrix3d(1.008, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50.011, 0, 0, 1); transform: matrix3d(1.008, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50.011, 0, 0, 1);}89.32%{-webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.997, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.997, 0, 0, 1);}92.46%{-webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.998, 0, 0, 1); transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.998, 0, 0, 1);}100%{-webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50, 0, 0, 1);}}@keyframes animation{0%{-webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50, 0, 0, 1);}2.14%{-webkit-transform: matrix3d(1.133, 0, 0, 0, 0, 1.133, 0, 0, 0, 0, 1, 0, -10.872, 0, 0, 1); transform: matrix3d(1.133, 0, 0, 0, 0, 1.133, 0, 0, 0, 0, 1, 0, -10.872, 0, 0, 1);}2.87%{-webkit-transform: matrix3d(1.152, 0, 0, 0, 0, 1.152, 0, 0, 0, 0, 1, 0, 1.427, 0, 0, 1); transform: matrix3d(1.152, 0, 0, 0, 0, 1.152, 0, 0, 0, 0, 1, 0, 1.427, 0, 0, 1);}4.27%{-webkit-transform: matrix3d(1.165, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 21.718, 0, 0, 1); transform: matrix3d(1.165, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 21.718, 0, 0, 1);}5.74%{-webkit-transform: matrix3d(1.155, 0, 0, 0, 0, 1.155, 0, 0, 0, 0, 1, 0, 37.859, 0, 0, 1); transform: matrix3d(1.155, 0, 0, 0, 0, 1.155, 0, 0, 0, 0, 1, 0, 37.859, 0, 0, 1);}8.48%{-webkit-transform: matrix3d(1.106, 0, 0, 0, 0, 1.106, 0, 0, 0, 0, 1, 0, 54.772, 0, 0, 1); transform: matrix3d(1.106, 0, 0, 0, 0, 1.106, 0, 0, 0, 0, 1, 0, 54.772, 0, 0, 1);}8.61%{-webkit-transform: matrix3d(1.104, 0, 0, 0, 0, 1.104, 0, 0, 0, 0, 1, 0, 55.228, 0, 0, 1); transform: matrix3d(1.104, 0, 0, 0, 0, 1.104, 0, 0, 0, 0, 1, 0, 55.228, 0, 0, 1);}11.48%{-webkit-transform: matrix3d(1.051, 0, 0, 0, 0, 1.051, 0, 0, 0, 0, 1, 0, 59.333, 0, 0, 1); transform: matrix3d(1.051, 0, 0, 0, 0, 1.051, 0, 0, 0, 0, 1, 0, 59.333, 0, 0, 1);}12.61%{-webkit-transform: matrix3d(1.035, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 58.914, 0, 0, 1); transform: matrix3d(1.035, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 58.914, 0, 0, 1);}16.82%{-webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 54.22, 0, 0, 1); transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 54.22, 0, 0, 1);}18.89%{-webkit-transform: matrix3d(0.994, 0, 0, 0, 0, 0.994, 0, 0, 0, 0, 1, 0, 52.063, 0, 0, 1); transform: matrix3d(0.994, 0, 0, 0, 0, 0.994, 0, 0, 0, 0, 1, 0, 52.063, 0, 0, 1);}20.95%{-webkit-transform: matrix3d(0.992, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, 50.578, 0, 0, 1); transform: matrix3d(0.992, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, 50.578, 0, 0, 1);}26.29%{-webkit-transform: matrix3d(0.996, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 49.377, 0, 0, 1); transform: matrix3d(0.996, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 49.377, 0, 0, 1);}33.23%{-webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 49.833, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 49.833, 0, 0, 1);}33.33%{-webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 49.84, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 49.84, 0, 0, 1);}35.14%{-webkit-transform: matrix3d(21.709, 0, 0, 0, 0, 0.825, 0, 0, 0, 0, 1, 0, 16.689, 0, 0, 1); transform: matrix3d(21.709, 0, 0, 0, 0, 0.825, 0, 0, 0, 0, 1, 0, 16.689, 0, 0, 1);}36.2%{-webkit-transform: matrix3d(26.339, 0, 0, 0, 0, 0.786, 0, 0, 0, 0, 1, 0, -1.468, 0, 0, 1); transform: matrix3d(26.339, 0, 0, 0, 0, 0.786, 0, 0, 0, 0, 1, 0, -1.468, 0, 0, 1);}36.87%{-webkit-transform: matrix3d(27.027, 0, 0, 0, 0, 0.78, 0, 0, 0, 0, 1, 0, -11.684, 0, 0, 1); transform: matrix3d(27.027, 0, 0, 0, 0, 0.78, 0, 0, 0, 0, 1, 0, -11.684, 0, 0, 1);}37.64%{-webkit-transform: matrix3d(26.219, 0, 0, 0, 0, 0.787, 0, 0, 0, 0, 1, 0, -22.158, 0, 0, 1); transform: matrix3d(26.219, 0, 0, 0, 0, 0.787, 0, 0, 0, 0, 1, 0, -22.158, 0, 0, 1);}39.07%{-webkit-transform: matrix3d(21.656, 0, 0, 0, 0, 0.825, 0, 0, 0, 0, 1, 0, -37.856, 0, 0, 1); transform: matrix3d(21.656, 0, 0, 0, 0, 0.825, 0, 0, 0, 0, 1, 0, -37.856, 0, 0, 1);}39.67%{-webkit-transform: matrix3d(19.081, 0, 0, 0, 0, 0.847, 0, 0, 0, 0, 1, 0, -42.943, 0, 0, 1); transform: matrix3d(19.081, 0, 0, 0, 0, 0.847, 0, 0, 0, 0, 1, 0, -42.943, 0, 0, 1);}41.11%{-webkit-transform: matrix3d(12.544, 0, 0, 0, 0, 0.902, 0, 0, 0, 0, 1, 0, -51.865, 0, 0, 1); transform: matrix3d(12.544, 0, 0, 0, 0, 0.902, 0, 0, 0, 0, 1, 0, -51.865, 0, 0, 1);}41.94%{-webkit-transform: matrix3d(8.958, 0, 0, 0, 0, 0.933, 0, 0, 0, 0, 1, 0, -55.212, 0, 0, 1); transform: matrix3d(8.958, 0, 0, 0, 0, 0.933, 0, 0, 0, 0, 1, 0, -55.212, 0, 0, 1);}42.48%{-webkit-transform: matrix3d(6.867, 0, 0, 0, 0, 0.95, 0, 0, 0, 0, 1, 0, -56.752, 0, 0, 1); transform: matrix3d(6.867, 0, 0, 0, 0, 0.95, 0, 0, 0, 0, 1, 0, -56.752, 0, 0, 1);}44.81%{-webkit-transform: matrix3d(0.249, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, -59.318, 0, 0, 1); transform: matrix3d(0.249, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, -59.318, 0, 0, 1);}45.28%{-webkit-transform: matrix3d(-0.555, 0, 0, 0, 0, 1.013, 0, 0, 0, 0, 1, 0, -59.239, 0, 0, 1); transform: matrix3d(-0.555, 0, 0, 0, 0, 1.013, 0, 0, 0, 0, 1, 0, -59.239, 0, 0, 1);}48.01%{-webkit-transform: matrix3d(-2.417, 0, 0, 0, 0, 1.029, 0, 0, 0, 0, 1, 0, -56.83, 0, 0, 1); transform: matrix3d(-2.417, 0, 0, 0, 0, 1.029, 0, 0, 0, 0, 1, 0, -56.83, 0, 0, 1);}52.22%{-webkit-transform: matrix3d(-0.516, 0, 0, 0, 0, 1.013, 0, 0, 0, 0, 1, 0, -52.062, 0, 0, 1); transform: matrix3d(-0.516, 0, 0, 0, 0, 1.013, 0, 0, 0, 0, 1, 0, -52.062, 0, 0, 1);}53.55%{-webkit-transform: matrix3d(0.213, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, -51.024, 0, 0, 1); transform: matrix3d(0.213, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, -51.024, 0, 0, 1);}54.32%{-webkit-transform: matrix3d(0.564, 0, 0, 0, 0, 1.004, 0, 0, 0, 0, 1, 0, -50.56, 0, 0, 1); transform: matrix3d(0.564, 0, 0, 0, 0, 1.004, 0, 0, 0, 0, 1, 0, -50.56, 0, 0, 1);}55.99%{-webkit-transform: matrix3d(1.115, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, -49.855, 0, 0, 1); transform: matrix3d(1.115, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, -49.855, 0, 0, 1);}59.09%{-webkit-transform: matrix3d(1.449, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, -49.385, 0, 0, 1); transform: matrix3d(1.449, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, -49.385, 0, 0, 1);}59.63%{-webkit-transform: matrix3d(1.442, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, -49.378, 0, 0, 1); transform: matrix3d(1.442, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, -49.378, 0, 0, 1);}66.67%{-webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.84, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.84, 0, 0, 1);}70.24%{-webkit-transform: matrix3d(0.941, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.997, 0, 0, 1); transform: matrix3d(0.941, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.997, 0, 0, 1);}74.44%{-webkit-transform: matrix3d(0.974, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50.042, 0, 0, 1); transform: matrix3d(0.974, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50.042, 0, 0, 1);}81.38%{-webkit-transform: matrix3d(1.008, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50.011, 0, 0, 1); transform: matrix3d(1.008, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50.011, 0, 0, 1);}89.32%{-webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.997, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.997, 0, 0, 1);}92.46%{-webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.998, 0, 0, 1); transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -49.998, 0, 0, 1);}100%{-webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50, 0, 0, 1);}}.slideshow{position: relative; overflow: hidden;}.images{background: url(slideshow.jpg); position: absolute; left: 0; top: 0; height: 100%; width: 300%; animation: slideshow 10s linear infinite;}@keyframes slideshow{0%{left: 0;}100%{left: -200%;}}.ban{margin: 25%}</style> </head> <body> <h1>The Beanannna is King</h1> <div class=strange > <img src="https://i.imgur.com/TToILPm.jpg" alt="" style="height:950px" class="animation-target ban images"> </div><br><br><br><div class=strange > <img src="https://i.imgur.com/TToILPm.jpg" alt="" style="height:950px" class="animation-target ban"> </div><div class=strange > <img src="https://i.imgur.com/TToILPm.jpg" alt="" style="height:950px" class="animation-target ban"> </div><div class=strange > <img src="https://i.imgur.com/TToILPm.jpg" alt="" style="height:950px" class="animation-target ban"> </div><h1 style="margin:50%">The Beanannna is King</h1> </body> </html>')
console.log("beans.html was created. Go See The Magic")
}}}
) 
}
//////////////////////////LOGGER//////////////////////////////////////

fs.writeFile("log.txt", console, function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "beans.txt was updated!"
  

})
;
var log = require('log-to-file');
log('log.txt');

















