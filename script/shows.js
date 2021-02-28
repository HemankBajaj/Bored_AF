
require('dotenv').config();
var api = process.env.API_KEY

// var y = Math.floor(Math.random() * 450 + 1);
// var show_id = y + 100;

// var master = "https://api.themoviedb.org/3/movie/";
// var movie = master + show_id.toString() + '?api_key=';
// var url = movie + api;

console.log('Running Perfectly');

function movie() {
    
    //var api = '55770b52b49ce303ad654769d927a2ba';
    var y = Math.floor(Math.random() * 450 + 1);
    var show_id = y + 100;
    var master = "https://api.themoviedb.org/3/movie/";
    var movie = master + show_id.toString() + '?api_key=';
    var url = movie + api;

    function display_title(str) {
        var text = document.getElementById("title1");
        text.innerHTML = str;
    }
    function display_genres(str) {
        var text = document.getElementById("genres");
        text.innerHTML = str;
    }
    function display_tag(str) {
        var text = document.getElementById("tagline");
        text.innerHTML = str;
    }
    function display_stars(str) {
        var text = document.getElementById("rating");
        text.innerHTML = str + "/10⭐";
    }
    function display_ov(str) {
        var text = document.getElementById("para");
        text.innerHTML = str;
    }
    fetch(url)
        .then(response => response.json())
        .then(data => display_title(data['title']));

    fetch(url)
        .then(response => response.json())
        .then(data => display_genres(data['genres'][0]['name']));

    fetch(url)
        .then(response => response.json())
        .then(data => display_tag(data['tagline']));

    fetch(url)
        .then(response => response.json())
        .then(data => display_stars(data['vote_average']));

    fetch(url)
        .then(response => response.json())
        .then(data => display_ov(data['overview']));

}
