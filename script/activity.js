
function display(str){
    var text =  document.getElementById("answer");
    text.innerHTML = str;
}

var master = 'http://www.boredapi.com/api/activity?type=';

function random() {
    url = 'http://www.boredapi.com/api/activity/';
    fetch(url)
  .then(response => response.json())
  .then(data => display(data['activity']) );
}

function education() {
    url = master + 'education';
    fetch(url)
  .then(response => response.json())
  .then(data => display(data['activity']) );
}

function social() {
    url = master + 'social';
    fetch(url)
  .then(response => response.json())
  .then(data => display(data['activity']) );
}

function diy() {
    url = master + 'diy';
    fetch(url)
  .then(response => response.json())
  .then(data => display(data['activity']) );
}

function recreational() {
    url = master + 'recreational';
    fetch(url)
  .then(response => response.json())
  .then(data => display(data['activity']) );
}

function charity() {
    url = master + 'charity';
    fetch(url)
  .then(response => response.json())
  .then(data => display(data['activity']) );
}

function cooking() {
    url = master + 'cooking';
    fetch(url)
  .then(response => response.json())
  .then(data => display(data['activity']) );
}

function relaxation() {
    url = master + 'relaxation';
    fetch(url)
  .then(response => response.json())
  .then(data => display(data['activity']) );
}

function music() {
    url = master + 'music';
    fetch(url)
  .then(response => response.json())
  .then(data => display(data['activity']) );
}

function busyWork() {
    url = master + 'busywork';
    fetch(url)
  .then(response => response.json())
  .then(data => display(data['activity']) );
}

function random() {
    url = master + '';
    fetch(url)
  .then(response => response.json())
  .then(data => display(data['activity']) );
}

