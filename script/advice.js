var url = 'http://api.adviceslip.com/advice';

function display(str){
    var text =  document.getElementById("advice");
    text.innerHTML = str;
}

function printAdvice() {
    fetch(url)
  .then(response => response.json())
  .then(data => display(data['slip']['advice']) );
}


















