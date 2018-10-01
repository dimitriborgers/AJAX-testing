var pageCounter = 1;
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");


btn.addEventListener("click", function() {
    var request = new XMLHttpRequest();

    request.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    request.onload = function() {
        var data = JSON.parse(request.responseText);
        renderHTML(data);
    };
    request.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    var htmlString = "";

    for (var i = 0;i < data.length;i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species +"</p>"
    }

    animalContainer.insertAdjacentHTML('beforeend',htmlString);
}


