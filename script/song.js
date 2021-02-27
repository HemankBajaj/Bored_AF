var url = "http://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json";

var counter = 0;
var img = document.createElement("img");

var y = Math.floor(Math.random() * 4 + 1);
if (y == 1) {
    img.src = "./assets/Music/xyz.jpg";
}
else if (y == 2) {
    img.src = "./assets/Music/abc.jpg";
}
else if (y == 3) {
    img.src = "./assets/Music/download.jpg";
}
else {
    img.src = "./assets/Music/images.jpg";
}
var src = document.getElementById("image");
src.appendChild(img);

function title1() {
    var x = Math.floor(Math.random() * 128 + 1);
    var song_id = x - 1;

    function display_title(str) {
        var text = document.getElementById("title");
        text.innerHTML = str;
    }
    function display_year(str) {
        var text = document.getElementById("year");
        text.innerHTML = str;
    }
    function display_art(str) {
        var text = document.getElementById("artist");
        text.innerHTML = str;
    }
    function display_url(str) {
        var text = document.getElementById("web_url");
        text.innerHTML = str;
    }
    fetch(url)
        .then(response => response.json())
        .then(data => display_title(data['songs'][song_id]['title']));
    fetch(url)
        .then(response => response.json())
        .then(data => display_year(data['songs'][song_id]['year']));
    fetch(url)
        .then(response => response.json())
        .then(data => display_art(data['songs'][song_id]['artist']));
    fetch(url)
        .then(response => response.json())
        .then(data => display_url(data['songs'][song_id]['web_url']));
if (counter == 0){
        var img = document.createElement("img");
        var y = Math.floor(Math.random() * 4 + 1);
        if (y == 1) {
            img.src = "./assets/Music/xyz.jpg";
        }
        else if (y == 2) {
            img.src = "./assets/Music/abc.jpg";
        }
        else if (y == 3) {
            img.src = "./assets/Music/download.jpg";
        }
        else {
            img.src = "./assets/Music/images.jpg";
        }
        var src = document.getElementById("image");
        src.appendChild(img);
    }
        counter+=1;
}
